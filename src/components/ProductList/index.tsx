import { CartContext, IProduct } from '../../Providers/CartProvider';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useContext } from 'react';


const ProductList = () => {
  const {products}=useContext(CartContext)
  return(
  <StyledProductList>
    {products.map((product:IProduct)=>(
    <ProductCard key={product.id} product={product} />))}
  </StyledProductList>
  )
};

export default ProductList;
