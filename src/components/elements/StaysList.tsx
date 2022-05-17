import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../store/context';
import StaysListItem from '../ui/StaysListItem';

const StaysList = () => {
  const { data, optionsToFilter, setOptionsToFilter } =
    useGlobalContext();

  return (
    <Section>
      {data
        .filter(
          (item) =>
            item.city
              .toLocaleLowerCase()
              .includes(optionsToFilter.city.toLocaleLowerCase()) &&
            item.maxGuests >= optionsToFilter.maxGuests
        )
        .map((stay) => {
          return <StaysListItem key={stay.title} {...stay} />;
        })}
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;
`;
export default StaysList;
