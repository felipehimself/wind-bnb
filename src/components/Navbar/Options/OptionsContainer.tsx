import styled from 'styled-components';
import { useGlobalContext } from '../../../store/context';
import { IisFocused } from '../../../interfaces/propsInterfaces';
import PlacesList from '../Places/PlacesList';
import OptionsList from './OptionsList';
import { Button } from '../../../styles/GlobalStyledComponents';

const OptionsContainer: React.FC = () => {
  const {
    isFocused,
    setIsFocused,
    setLocation,
    setOptionsToFilter,
    setGuests,
  } = useGlobalContext();

  const cleanInputs = () => {
    setLocation('');
    setOptionsToFilter({ city: '', maxGuests: 0 });
    setGuests({ children: 0, adults: 0 });
  };

  return (
    <Wrapper isFocused={isFocused}>
      <PlacesList />
      <OptionsList />
      <div className='btns-container'>
        <Button onClick={() => setIsFocused(false)}>close</Button>
        <Button onClick={cleanInputs}>clean</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<IisFocused>`
  display: flex;
  align-items: flex-start;
  height: ${(props) => (props.isFocused ? '14rem' : 0)};
  transition: height 0.3s ease;
  overflow: hidden;
  justify-content: space-between;

  .btns-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  @media screen and (max-width: 540px) {
    .btns-container {
      align-items: flex-end;
      flex: 0.4;
    }
  }
`;
export default OptionsContainer;
