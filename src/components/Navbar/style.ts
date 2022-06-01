import styled from 'styled-components';
interface IStyle {
  isFocused: boolean;
}

export const Nav = styled.nav`
  padding: 2.2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const Container = styled.div<IStyle>`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  overflow: hidden;
  width: ${(props) => (props.isFocused ? '100%' : undefined)};

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
