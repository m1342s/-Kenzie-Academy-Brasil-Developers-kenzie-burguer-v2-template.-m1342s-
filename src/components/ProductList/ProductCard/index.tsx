import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext, IProduct } from '../../../Providers/CartProvider';

interface IProductCard{
  product: IProduct
}

const ProductCard = ({product}: IProductCard) => {
  const {addProduct}=useContext(CartContext)
  return(
  <StyledProductCard>
    <div className='imageBox'>
      <img src={product.img} alt={product.name} />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <StyledParagraph className='category'>{product.category}</StyledParagraph>
      <StyledParagraph className='price'>R${product.price}.00</StyledParagraph>
      <StyledButton  $buttonSize='medium' $buttonStyle='green' onClick={()=>addProduct(product.id)}>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
  )
};

export default ProductCard;
