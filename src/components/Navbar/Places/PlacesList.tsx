import { useGlobalContext } from '../../../store/context';
import PlaceListItem from './PlaceListItem';

import { Ul } from './styles';
const PlacesList: React.FC = () => {
  const { data, isFocused, setLocation } = useGlobalContext();

  const uniqueCities = [
    ...new Map(data.map((item) => [item['city'], item])).values(),
  ];

  return (
    <Ul isFocused={isFocused}>
      {uniqueCities.map((place) => {
        return (
          <PlaceListItem
            key={place.title}
            setLocation={setLocation}
            {...place}
          />
        );
      })}
    </Ul>
  );
};

export default PlacesList;
