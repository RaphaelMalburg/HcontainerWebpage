"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { homeFormSchema } from "@/lib/validations/form-home";

export function FormHome() {
  const form = useForm<z.infer<typeof homeFormSchema>>({
    resolver: zodResolver(homeFormSchema),
  });
  function onSubmit(values: z.infer<typeof homeFormSchema>) {
    console.log(values);
  }
  return (
    <section className=" w-2/3 mx-auto  mt-10">
      <h1 className="text-5xl font-bold text-center dark:text-primary-blue-100">Em que podemos lhe ajudar?</h1>
      <h3 className="pt-4 md:mx-40 text-center dark:text-primary-blue-100">
        Estamos prontos para trabalhar em projetos de qualquer complexidade, seja containers sem modificação ou projetos exclusivos.
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" md:col-span-1 ">
                <FormLabel className="dark:text-primary-blue-100">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className=" md:col-span-1 col-span-2">
                <FormLabel className="dark:text-primary-blue-100">Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Seu número de contato" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormLabel className="dark:text-primary-blue-100">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" col-span-2 row-span-3">
                <FormLabel className="dark:text-primary-blue-100">Digite aqui sua mensagem</FormLabel>
                <FormControl className="h-40">
                  <Input placeholder="Mensagem" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" col-span-2 mx-auto w-36 py-6 bg-primary-blue">
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
}
