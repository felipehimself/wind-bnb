import styled from 'styled-components';
import { options } from '../../data/data';
import OptionsItem from '../ui/OptionsItem';

const OptionsList = () => {
  return (
    <Wrapper>
      {options.map((option) => {
        return <OptionsItem key={option.type} {...option} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  flex: 1;
  /* justify-self: flex-start; */
`;

export default OptionsList;
