import NavBar from '../Navbar/NavBar';
import OptionsContainer from '../Navbar/Options/OptionsContainer';
import * as Style from './styles'

const Header: React.FC = () => {
  return (
    <Style.Header>
      <NavBar />
      <OptionsContainer/>
    </Style.Header>
  );
};


export default Header;
