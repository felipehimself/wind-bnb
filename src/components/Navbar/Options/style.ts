import styled from 'styled-components';
import { IisFocused } from '../../../interfaces/propsInterfaces';
import { Colors } from '../../../constants/colors';

export const Container = styled.div<IisFocused>`
  display: flex;
  align-items: flex-start;
  height: ${(props) => (props.isFocused ? '14rem' : 0)};
  transition: height 0.3s ease;
  overflow: hidden;
  justify-content: space-between;
`;

export const BtnContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (max-width: 540px) {
    align-items: flex-end;
    flex: 0.4;
  }
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;

  @media screen and (max-width: 540px) {
    align-items: center;
  }
`;

export const H4 = styled.h4`
  text-transform: capitalize;
  font-size: 1.5rem;
  color: #030303;
  font-weight: bold;
`;

export const P = styled.p`
  color: ${() => Colors.colorGrayLight};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 1.8rem;
  height: 1.8rem;
  border: ${() => '1px solid ' + Colors.colorGrayLight};
  border-radius: 4px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 1.4rem;
`;

export const ContainerColumn = styled.div`
  flex-direction: column;
  flex: 1;
`;
