import styled from 'styled-components';
import { IChildren } from '../../interfaces/propsInterfaces';

const Header: React.FC<IChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.header`
`;
export default Header;
