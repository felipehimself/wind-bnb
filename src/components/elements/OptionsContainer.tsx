import styled from 'styled-components';
import { IChildren } from '../../interfaces/propsInterfaces';
import { useGlobalContext } from '../../store/context';
import { IisFocused } from '../../interfaces/propsInterfaces';

const OptionsContainer: React.FC<IChildren> = ({ children }) => {
  const { isFocused } = useGlobalContext();

  return <Wrapper isFocused={isFocused}>{children}</Wrapper>;
};

const Wrapper = styled.div<IisFocused>`
  display: flex;
  height: ${(props) => (props.isFocused ? '14rem' : 0)};
  transition: height 0.3s ease;
  transition-delay: 0.2s;
  overflow: hidden;
`;
export default OptionsContainer;
