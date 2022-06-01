import { options } from '../../../data/data';
import { useGlobalContext } from '../../../store/context';
import OptionsItem from './OptionsItem';
import * as Style from './style';
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
    <Style.ContainerColumn>
      {options.map((option) => {
        return (
          <OptionsItem
            key={option.type}
            guests={guests}
            defineGuests={defineGuests}
            {...option}
          />
        );
      })}
    </Style.ContainerColumn>
  );
};

export default OptionsList;
