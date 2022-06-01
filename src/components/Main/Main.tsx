import { useGlobalContext } from '../../store/context';
import { H1, H3, FlexContainer } from '../../shared/GlobalStyledComponents';
import StaysList from '../Stays/StaysList';

import * as Style from './style';

const Main = () => {
  const { data, optionsToFilter } = useGlobalContext();

  const placesToStay = data.filter(
    (item) =>
      item.city
        .toLocaleLowerCase()
        .includes(optionsToFilter.city.toLocaleLowerCase()) &&
      item.maxGuests >= optionsToFilter.maxGuests
  ).length;

  return (
    <Style.Main>
      <FlexContainer margin='3rem 0'>
        <H1>Stays in Finland</H1>
        <H3>{placesToStay} stays</H3>
      </FlexContainer>
      <StaysList />
    </Style.Main>
  );
};

export default Main;
