import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useContext, useState } from 'react';
import { CartContext } from '../../Providers/CartProvider';

const CartModal = () => {
  const {setOpenModal,cart}=useContext(CartContext)
 return( <StyledCartModalBox>
    <dialog>
      <header>
        <StyledTitle tag='h2' $fontSize='three'>
          Carrinho de compras
        </StyledTitle>
        <button
          type='button'
          aria-label='Fechar'
          onClick={() => {
            setOpenModal(false)
          }}
        >
          <MdClose size={21} />
        </button>
      </header>
      <div className='cartBox'>
       {cart.length>0?  <CartProductList />:
       <div className='emptyBox'>
       <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
         Sua sacola está vazia
       </StyledTitle>
       <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
     </div> }
      </div>
    </dialog>
  </StyledCartModalBox>
 )
};

export default CartModal;
