import styled from 'styled-components';
import logo from './../../assets/logo.svg';
import LocationInput from '../ui/LocationInput';
import AddGuestsItem from '../ui/AddGuestsItem';
import SearchButton from '../ui/SearchButton';
import NavItensContainer from './NavItensContainer';
import { useGlobalContext } from '../../store/context';
import OptionsContainer from './OptionsContainer';
import PlacesList from './PlacesList';
import OptionsList from './OptionsList';

const NavBar: React.FC = () => {
  const { isFocused } = useGlobalContext();
  console.log(isFocused);

  return (
    <Nav>
      {!isFocused && <img src={logo} alt='logo' />}
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
`;

export default NavBar;
