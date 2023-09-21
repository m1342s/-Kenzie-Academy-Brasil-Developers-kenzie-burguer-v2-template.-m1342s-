import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { useForm,SubmitHandler } from "react-hook-form"
import { api } from '../../../axiosRequest/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext,ILoginFormData } from '../../../Providers/UserProvider';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

const schema= z.object({
  
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
  password: z.string()
    .min(7, { message: "A senha é obrigatória e precisa de mínimo 7 caracteres"})
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
})








const LoginForm = () => {
  const{loginUser}=useContext(UserContext)
  const navigate= useNavigate()
  const { register,handleSubmit,formState:{errors} }=useForm<ILoginFormData>({
    resolver: zodResolver(schema)
    })
  
  const handleLogin:SubmitHandler<ILoginFormData>=(formData)=>{
    loginUser(formData)
  }

    return(
  <StyledForm onSubmit={handleSubmit(handleLogin)}>
    <Input placeholder='email' id='login' type='email' register= {register('email')} error={errors.email} />
    <Input placeholder='password' id='senha' type='password' register= {register('password')} error={errors.password} />
    <StyledButton $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>)
;
}
export default LoginForm;
