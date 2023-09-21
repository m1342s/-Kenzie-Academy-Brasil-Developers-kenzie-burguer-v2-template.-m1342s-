import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { FieldError,UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id:string;
  error?: FieldError|undefined;
  type: "text"|"email"|"password"
  register:UseFormRegisterReturn<string>
}

// const Input = forwardRef(({ id,error,...rest}:InputProps,ref:ForwardedRef<HTMLInputElement>) => (

//   <div>
//     <StyledInputContainer>
//       <input type='text' id={id} ref={ref} placeholder=' ' {...rest}/>
//       <label htmlFor={id}>Teste</label>
//     </StyledInputContainer>
//     <StyledParagraph fontColor='red'>{error?<p>{error.message}</p>:null}</StyledParagraph>
//   </div>
  
// ));
const Input = ({ id,error,register,type}:InputProps)=> (

  <div>
    <StyledInputContainer>
      <input type={id} id={id}  placeholder=' ' {...register}/>
      <label htmlFor={id}>{type}</label>
    </StyledInputContainer>
    <StyledParagraph fontColor='red'>{error?<p>{error.message}</p>:null}</StyledParagraph>
  </div>
  
);

export default Input;
