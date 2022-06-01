import { useGlobalContext } from '../../../store/context';
import PlacesList from '../Places/PlacesList';
import OptionsList from './OptionsList';
import { Button } from '../../../shared/GlobalStyledComponents';
import * as Style from './style';

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
    <Style.Container isFocused={isFocused}>
      <PlacesList />
      <OptionsList />
      <Style.BtnContainer>
        <Button onClick={() => setIsFocused(false)}>close</Button>
        <Button onClick={cleanInputs}>clean</Button>
      </Style.BtnContainer>
    </Style.Container>
  );
};

export default OptionsContainer;
