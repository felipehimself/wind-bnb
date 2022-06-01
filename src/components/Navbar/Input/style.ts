import styled from 'styled-components';
import { IisFocused } from '../../../interfaces/propsInterfaces';

export const Input = styled.input<IisFocused>`
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  border: none;
  text-align: center;
  font-size: 1.4rem;
  height: 4.8rem;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px) {
    
    width: 100%;
  
}

  :focus {
    outline: none;
  }
`;