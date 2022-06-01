import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Header = styled.header`
  position: fixed;
  max-width: 120rem;
  margin: 0 auto;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 2rem;
  z-index: 100;
  background-color: ${()=> Colors.colorWhite};
  padding-bottom: 2rem;

`;