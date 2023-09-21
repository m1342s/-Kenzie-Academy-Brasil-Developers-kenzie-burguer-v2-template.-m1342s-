import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, IProduct } from '../../../../Providers/CartProvider';
import { useContext } from 'react';

interface ICartProductCardProps{
  product:IProduct
}

const CartProductCard = ({product}: ICartProductCardProps) => {
  const {deleteProduct}=useContext(CartContext)
  return(
      <StyledCartProductCard>
    <div className='imageBox'>
      <img src={product.img} alt={product.name} />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <button onClick={()=>deleteProduct(product.id)} type='button' aria-label='Remover'>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
  )
};

export default CartProductCard;
