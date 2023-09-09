import { z } from "zod";

export const homeFormSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve conter ao menos 3 letras.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  phone: z.string().min(11, {
    message: "Telefone deve conter ao menos 11 números.",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve conter ao menos 10 letras.",
  }),
});
