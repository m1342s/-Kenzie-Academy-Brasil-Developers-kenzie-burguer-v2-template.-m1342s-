import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../Providers/CartProvider';

const CartProductList = () => {
 const {cart}=useContext(CartContext)
 
  return (
  
    <StyledCartProductList>
      <ul>
        {cart.map((product)=>{
        return <CartProductCard key={product.id} product={product} /> 
        })}
       
      </ul>
  
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'></StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
};

export default CartProductList;
