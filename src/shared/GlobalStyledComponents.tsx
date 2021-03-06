import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { IStyledComponent } from '../interfaces/propsInterfaces';

export const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  color: ${Colors.colorWhite};
  background-color: ${Colors.colorPrimary};
  border-radius: 1rem;
  text-transform: capitalize;
  transition: all 0.3s ease;

  :hover {
    background-color: ${Colors.colorPrimaryTint};
  }
`;

export const ButtonOptions = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 1.8rem;
  height: 1.8rem;
  border: ${'1px solid ' + Colors.colorGrayLight};
  border-radius: 4px;
  cursor: pointer;
`;

export const H1 = styled.h1`
  font-size: 2.6rem;
  color: ${Colors.colorDarkGray};
`;

export const H3 = styled.h3`
  font-size: 1.6rem;
  color: ${Colors.colorGrayLight};
  align-self: flex-end;
`;

export const FlexContainer = styled.div<IStyledComponent>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
`;
