import { IPlaces } from '../../../interfaces/dataInterface';
import locationPin from '././../../../assets/location.svg';

import { Li, Icon, Span } from './styles';

interface IProps extends IPlaces {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const PlaceListItem: React.FC<IProps> = ({ city, country, setLocation }) => {
  return (
    <Li onClick={() => setLocation(city)}>
      <Icon src={locationPin} alt='location pin' />
      <Span>
        {city}, {country}
      </Span>
    </Li>
  );
};

export default PlaceListItem;
