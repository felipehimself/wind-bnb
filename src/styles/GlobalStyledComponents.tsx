import styled from 'styled-components';
import { Colors } from '../constants/colors';
export const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  color: ${() => Colors.colorWhite};
  background-color: ${() => Colors.colorPrimary};
  border-radius: 1rem;
  text-transform: capitalize;
  transition: all 0.3s ease;

  :hover {
    background-color: ${()=> Colors.colorPrimaryTint}			;
  }
`;
