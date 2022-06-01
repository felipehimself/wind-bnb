import styled from 'styled-components';
import { Colors } from '../../../constants/colors';
import { IisFocused } from '../../../interfaces/propsInterfaces';

export const Button = styled.button<IisFocused>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 4.8rem;
  padding: ${(props) => (props.isFocused ? 0 : '1rem 3rem')};
  transition: flex 0.3s ease;
  border: none;
  background-color: transparent;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px) {
    flex: 0.5;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Img = styled.img`
  filter: invert(47%) sepia(53%) saturate(2558%) hue-rotate(330deg)
    brightness(100%) contrast(82%);
`;
export const P = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${() => Colors.colorPrimary};

  @media screen and (max-width: 540px) {
    display: none;
  }
`;
