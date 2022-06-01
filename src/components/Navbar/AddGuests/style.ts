import styled from 'styled-components';
import { Colors } from '../../../constants/colors';
import { IisFocused } from '../../../interfaces/propsInterfaces';

export const Container = styled.div<IisFocused>`
  border-right: ${() => '1px solid' + Colors.colorGrayLighter};
  border-left: ${() => '1px solid' + Colors.colorGrayLighter};
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const P = styled.span`
  padding: 0 2rem;
  font-size: 1.4rem;
  color: ${Colors.colorGrayLight};
`;
