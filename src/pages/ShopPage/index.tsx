import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';
import { CartContext } from '../../Providers/CartProvider';

const ShopPage = () => {
  const {user,logout}=useContext(UserContext)
  const {products,openModal}=useContext(CartContext)
  
  return(
  <StyledShopPage>
    {openModal? <CartModal/>:null}
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList/>
      </StyledContainer>
    </main>
  </StyledShopPage>
  )
};

export default ShopPage;
