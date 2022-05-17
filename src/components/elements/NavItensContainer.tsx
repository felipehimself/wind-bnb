import styled from 'styled-components';
import { INavItensContainer } from '../../interfaces/propsInterfaces';
import { useGlobalContext } from '../../store/context';

const NavItensContainer: React.FC<INavItensContainer> = ({ children }) => {
  const { setIsFocused, isFocused } = useGlobalContext();

  return (
    <Wrapper isFocused={isFocused} onClick={() => setIsFocused(true)}>
      {children}
    </Wrapper>
  );
};

interface Itest {
  isFocused: boolean;
}

const Wrapper = styled.div<Itest>`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  overflow: hidden;
  width: ${(props) => (props.isFocused ? '100%' : undefined)};

`;
export default NavItensContainer;
