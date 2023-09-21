import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../Providers/UserProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext,IProduct } from '../../Providers/CartProvider';

const Header = () => {
 const {logout}=useContext(UserContext)
 const {setOpenModal,addProduct}=useContext(CartContext)

 
  return(
  <StyledHeader>
    <StyledContainer containerWidth={1300}>
      <div className='flexGrid'>
        <img
          src={LogoKenzieBurguer}
          alt='Kenzie Burguer Logo'
          className='logo'
        />
        <nav className='nav' role='navigation'>
          <SearchForm />
          <div className='buttons'>
            <button
              type='button'
              onClick={() => {
                setOpenModal(true)
               
              }}
            >
              <MdShoppingCart size={28} />
            </button>
            <Link to={"/"}>
            <button type='button' onClick={()=>logout()}>
              <MdLogout size={28} />
            </button>
            </Link>
          </div>
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
  )
};

export default Header;
