import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useForm,SubmitHandler } from "react-hook-form"
import { TypeOf, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from '../../../axiosRequest/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { IRegisterFormData, UserContext } from '../../../Providers/UserProvider';
import { schemaRegister,TRegisterValidation } from '../RegisterFormValidation';



const RegisterForm = () => {
  const {registerUser}=useContext(UserContext)
  const navigate= useNavigate()
  const { register,handleSubmit,formState:{errors} }=useForm<IRegisterFormData>({
  resolver: zodResolver(schemaRegister)
  })

  const handleRegister:SubmitHandler<IRegisterFormData>=(formData)=>{
    registerUser(formData)
  }

  return( <StyledForm onSubmit={handleSubmit(handleRegister)}>
    <Input  id='name' type='text' register= {register('name')} error={errors.name} />
    <Input  id='email' type='email' register=  {register('email')} error={errors.email} />
    <Input id='password' type='password' register=  {register('password')} error={errors.password}/>
    <Input id='confirm' type='password' register=   {register('confirm')} error={errors.confirm} />
    <StyledButton $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>)
;
}
export default RegisterForm;
