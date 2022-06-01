import styled from 'styled-components';
import { IisFocused } from '../../../interfaces/propsInterfaces';
import { Colors } from '../../../constants/colors';

export const Ul = styled.ul<IisFocused>`
  margin-left: 1rem;
  flex: 1;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 1px;
  cursor: pointer;
`;

export const Icon = styled.img`
  filter: invert(28%) sepia(0%) saturate(4241%) hue-rotate(211deg)
    brightness(99%) contrast(84%);
  height: 1.5rem;
  margin-right: 0.6rem;
`;
export const Span = styled.span`
  border-bottom: 1px solid transparent;
  transition: border 0.3s ease;
  :hover {
    border-bottom: ${'1px solid ' + Colors.colorGrayLight};
  }
`;
