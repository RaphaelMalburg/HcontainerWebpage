import { z } from "zod";

export const footerFormSchema = z.object({
  email: z.string().email({
    message: "Email inválido.",
  }),
});
