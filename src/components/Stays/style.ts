import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;
`;

export const Article = styled.article`
  width: 100%;
`;
export const Container = styled.div`
  max-height: 24rem;
  overflow: hidden;
  border-radius: 2rem;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

interface IStyle {
  size?: string;
  weight?: string;
}

export const P = styled.p<IStyle>`
  color: ${Colors.colorDarkGray};
  font-size: ${(props) => props.size || '1.3rem'};
  font-weight: ${(props) => props.weight || 'normal'};
  color: ${Colors.colorDarkGray};
`;

export const Icon = styled.img`
  height: 2rem;
  filter: invert(47%) sepia(53%) saturate(2558%) hue-rotate(330deg)
    brightness(100%) contrast(82%);
`;

export const Span = styled.span`
  font-size: 1.3rem;
`;
