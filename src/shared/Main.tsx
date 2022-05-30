import styled from 'styled-components';
import { useGlobalContext } from '../store/context';
import { H1, H3, FlexContainer } from '../styles/GlobalStyledComponents';
import StaysList from '../components/Stays/StaysList';
const Main = () => {

  const {data, optionsToFilter} = useGlobalContext() 

  const placesToStay = data
        .filter(
          (item) =>
            item.city
              .toLocaleLowerCase()
              .includes(optionsToFilter.city.toLocaleLowerCase()) &&
            item.maxGuests >= optionsToFilter.maxGuests
        ).length


  return (
    <Wrapper>
      <FlexContainer margin='3rem 0'>
        <H1>Stays in Finland</H1>
        <H3>{placesToStay} stays</H3>
      </FlexContainer>
      <StaysList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 12rem;
  margin-bottom: 8rem;
`;
export default Main;
