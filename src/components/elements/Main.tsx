import styled from 'styled-components';
import { H1, H3, FlexContainer } from '../../styles/GlobalStyledComponents';
import StaysList from './StaysList';
const Main = () => {
  return (
    <Wrapper>
      <FlexContainer margin='3rem 0'>
        <H1>Stays in Finland</H1>
        <H3>15 stays</H3>
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
