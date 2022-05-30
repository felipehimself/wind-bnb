import styled from 'styled-components';
import { useGlobalContext } from '../../../store/context';
import PlaceListItem from './PlaceListItem';
import { IisFocused } from '../../../interfaces/propsInterfaces';

const PlacesList: React.FC = () => {
  const { data, isFocused, setLocation } = useGlobalContext();

  const uniqueCities = [
    ...new Map(data.map((item) => [item['city'], item])).values(),
  ];


  return (
    <Wrapper isFocused={isFocused}>
      {uniqueCities.map((place) => {
        return <PlaceListItem key={place.title} setLocation={setLocation} {...place} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul<IisFocused>`
  margin-left: 1rem;
  flex: 1;
`;
export default PlacesList;
