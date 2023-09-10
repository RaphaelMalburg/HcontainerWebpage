"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { footerFormSchema } from "@/lib/validations/form-footer";

export function FormFooter() {
  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
  });
  function onSubmit(values: z.infer<typeof footerFormSchema>) {
    console.log(values);
  }
  return (
    <section className=" w-2/3 mx-auto ">
      <h1 className="text-2xl font-bold text-primary-blue pb-4">Receba as novidades:</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 grid grid-cols-3  ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" col-span-2">
                <FormLabel className="dark:text-primary-blue-100">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu Email aqui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="  w-36 bg-secondary-orange col-span-1  self-end  justify-self-start">
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
}
