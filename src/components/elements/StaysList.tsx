import styled from 'styled-components';
import { useGlobalContext } from '../../store/context';
import StaysListItem from '../ui/StaysListItem';

const StaysList = () => {
  const { data } = useGlobalContext();

  return (
    <Section>
      {data.map((stay) => {
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