"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { footerFormSchema } from "@/lib/validations/form-footer";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type FormValues = z.infer<typeof footerFormSchema>;
export function FormFooter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  function onSubmit(values: z.infer<typeof footerFormSchema>) {
    console.log(values);
    const formElement = document.createElement("form");
    formElement.style.display = "none";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = values.email;
    formElement.appendChild(emailInput);
    document.body.appendChild(formElement);
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID2 || "", formElement, process.env.NEXT_PUBLIC_PUBLIC_KEY || "").then(
      (result) => {
        console.log(result.text);
        toast.success("Email Cadastrado com sucesso!");
        reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <section className="md:pb-0 pb-10 md:w-2/3 mx-auto w-full  ">
      <h1 className="text-2xl font-bold text-primary-blue pb-4 dark:text-blue-400">Receba as novidades:</h1>
      <form className="gap-4 grid grid-cols-3  " onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-2">
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
            className={`w-full   px-3 py-2 border  border-primary-blue rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <button type="submit" className="  md:w-36 bg-secondary-orange col-span-1  self-end  justify-self-start font-bold px-8 rounded-md h-full">
          Enviar
        </button>
      </form>
    </section>
  );
}
