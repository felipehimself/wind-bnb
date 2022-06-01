import { useGlobalContext } from '../../store/context';
import StaysListItem from './StaysListItem';
import { Section } from './style';

const StaysList = () => {
  const { data, optionsToFilter } = useGlobalContext();

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

export default StaysList;
