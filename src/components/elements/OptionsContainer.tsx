import styled from 'styled-components';
import { IChildren } from '../../interfaces/propsInterfaces';
import { useGlobalContext } from '../../store/context';
import { IisFocused } from '../../interfaces/propsInterfaces';
import PlacesList from './PlacesList';
import OptionsList from './OptionsList';
import { Button } from '../../styles/GlobalStyledComponents';
const OptionsContainer: React.FC = () => {
  const { isFocused, setIsFocused } = useGlobalContext();

  return (
    <Wrapper isFocused={isFocused}>
      <PlacesList />
      <OptionsList />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <Button onClick={() => setIsFocused(false)}>fechar</Button>
        <Button>limpar</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<IisFocused>`
  display: flex;
  align-items: flex-start;
  height: ${(props) => (props.isFocused ? '14rem' : 0)};
  transition: height 0.3s ease;
  /* transition-delay: 0.2s; */
  overflow: hidden;
  /* add padding condicionamente, se n vai aparecer msm com height 0 */
`;
export default OptionsContainer;
