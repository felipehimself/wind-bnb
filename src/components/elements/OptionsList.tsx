import styled from 'styled-components';
import { options } from '../../data/data';
import { useGlobalContext } from '../../store/context';
import OptionsItem from '../ui/OptionsItem';

const OptionsList = () => {
  const { guests, setGuests } = useGlobalContext();
  
  const defineGuests = (type: string, option: string) => {
    if (option === 'add') {
      return setGuests((prev) => {
        return { ...prev, [type]: guests[type as keyof typeof guests]++ };
      });
    } else {
      return setGuests((prev) => {
        return {
          ...prev,
          [type]:
            guests[type as keyof typeof guests]-- > 0
              ? guests[type as keyof typeof guests]
              : 0,
        };
      });
    }
  };

  return (
    <Wrapper>
      {options.map((option) => {
        return <OptionsItem key={option.type} guests={guests} defineGuests={defineGuests} {...option} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  flex: 1;

`;

export default OptionsList;
