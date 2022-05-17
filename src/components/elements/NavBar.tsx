import styled from 'styled-components';
import logo from './../../assets/logo.svg';
import LocationInput from '../ui/LocationInput';
import AddGuestsItem from '../ui/AddGuestsItem';
import SearchButton from '../ui/SearchButton';
import NavItensContainer from './NavItensContainer';
import { useGlobalContext } from '../../store/context';

const NavBar: React.FC = () => {
  const { isFocused } = useGlobalContext();
  return (
    <Nav>
      {!isFocused && <img className='logo' src={logo} alt='logo' />}
      <NavItensContainer>
        <LocationInput />
        <AddGuestsItem />
        <SearchButton />
      </NavItensContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 2.2rem 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 540px) {
    .logo {
      display: none
    }
  }
`;

export default NavBar;
