import { INavItensContainer } from '../../interfaces/propsInterfaces';
import { useGlobalContext } from '../../store/context';
import { Container } from './style';

const NavItensContainer: React.FC<INavItensContainer> = ({ children }) => {
  const { isFocused } = useGlobalContext();

  return <Container isFocused={isFocused}>{children}</Container>;
};

export default NavItensContainer;
