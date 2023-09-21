import { z } from "zod"


export const schemaRegister= z.object({
  
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
  password: z.string()
    .min(7, { message: "A senha é obrigatória e precisa de mínimo 7 caracteres"})
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória")
}).refine(({password, confirm}) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})

export type TRegisterValidation=z.infer<typeof schemaRegister>