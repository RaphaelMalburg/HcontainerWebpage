"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { homeFormSchema } from "@/lib/validations/form-home";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type FormValues = z.infer<typeof homeFormSchema>;
export function FormHome() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const form = useForm<z.infer<typeof homeFormSchema>>({
    resolver: zodResolver(homeFormSchema),
  });

  function onSubmit(values: z.infer<typeof homeFormSchema>) {
    // Create a hidden HTML form element
    const formElement = document.createElement("form");
    formElement.style.display = "none";

    // Create hidden input fields for each form field
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = values.name;
    formElement.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = values.email;
    formElement.appendChild(emailInput);

    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.name = "phone";
    phoneInput.value = values.phone;
    formElement.appendChild(phoneInput);

    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.value = values.message;
    formElement.appendChild(messageInput);

    // Append the form element to the document body
    document.body.appendChild(formElement);
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formElement, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        confirm("Confirmado");
        reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-10  w-2/3 mx-auto ">
      <div className=" md:col-span-1 ">
        <label htmlFor="name" className="dark:text-primary-blue-100 font-bold">
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Este campo é obrigatório.", // Required validation
            minLength: {
              value: 3,
              message: "Nome deve conter ao menos 3 letras.", // Custom error message
            },
          })}
          className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>{" "}
      <div className=" md:col-span-1 col-span-2">
        <label htmlFor="phone" className="dark:text-primary-blue-100 font-bold">
          Telefone
        </label>
        <input
          type="text"
          id="phone"
          {...register("phone", {
            required: "Este campo é obrigatório.", // Required validation
            minLength: {
              value: 11,
              message: "Telefone deve conter ao menos 11 números.", // Custom error message
            },
          })}
          className={`w-full px-3 py-2 border rounded-md ${errors.phone ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div className="col-span-2">
        <label htmlFor="email" className="dark:text-primary-blue-100 text-gray-700 font-bold ">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Este campo é obrigatório.", // Required validation
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email inválido.", // Custom error message
            },
          })}
          className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="col-span-2 ">
        <label htmlFor="message" className="dark:text-primary-blue-100 text-gray-700 font-bold ">
          Mensagem
        </label>
        <textarea
          id="message"
          {...register("message", {
            required: "Este campo é obrigatório.", // Required validation
            minLength: {
              value: 10,
              message: "Mensagem deve conter ao menos 10 letras.", // Custom error message
            },
          })}
          className={`w-full h-40 px-3 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <button type="submit" className="col-span-2 mx-auto w-36 py-4 bg-primary-blue  hover:bg-blue-900 text-white font-bold px-8 rounded-md">
        Enviar
      </button>
    </form>
  );
}
