import { useGlobalContext } from '../../../store/context';
import * as Style from './style'
const AddGuestsItem = () => {
  const { isFocused, guests, setIsFocused } = useGlobalContext();

  return (
    <Style.Container isFocused={isFocused} onClick={() => setIsFocused(true)}>
      <Style.P>
        {(guests?.adults ?? 0) + (guests?.children ?? 0) === 0
          ? 'Add Guests'
          : (guests?.adults ?? 0) + (guests?.children ?? 0)}
      </Style.P>
    </Style.Container>
  );
};

export default AddGuestsItem;
