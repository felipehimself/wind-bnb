import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { IChildren } from '../../interfaces/propsInterfaces';
import NavBar from './NavBar';
import OptionsContainer from './OptionsContainer';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <OptionsContainer/>
    </Wrapper>
  );
};

const Wrapper = styled.header`

  background-color: ${()=> Colors.colorWhite}

`;
export default Header;
