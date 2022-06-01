import logo from './../../assets/logo.svg';
import LocationInput from './Input/LocationInput';
import AddGuestsItem from './AddGuests/AddGuestsItem';
import SearchButton from './Search/SearchButton';
import NavItensContainer from './NavItensContainer';
import { useGlobalContext } from '../../store/context';
import * as Style from './style';

const NavBar: React.FC = () => {
  const { isFocused } = useGlobalContext();
  return (
    <Style.Nav>
      {!isFocused && <Style.Img src={logo} alt='logo' />}
      <NavItensContainer>
        <LocationInput />
        <AddGuestsItem />
        <SearchButton />
      </NavItensContainer>
    </Style.Nav>
  );
};



export default NavBar;
