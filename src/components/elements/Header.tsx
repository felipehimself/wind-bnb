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
  position: fixed;
  max-width: 120rem;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: ${()=> Colors.colorWhite};
  padding-bottom: 2rem;

`;
export default Header;
