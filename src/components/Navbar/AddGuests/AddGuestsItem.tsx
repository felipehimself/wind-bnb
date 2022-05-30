import styled from 'styled-components';
import { Colors } from '../../../constants/colors';
import { useGlobalContext } from '../../../store/context';
import { IisFocused } from '../../../interfaces/propsInterfaces';
const AddGuestsItem = () => {
  const { isFocused, guests, setIsFocused } = useGlobalContext();

  return (
    <Wrapper isFocused={isFocused} onClick={() => setIsFocused(true)}>
      <span>
        {(guests?.adults ?? 0) + (guests?.children ?? 0) == 0
          ? 'Add Guests'
          : (guests?.adults ?? 0) + (guests?.children ?? 0)}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div<IisFocused>`
  border-right: ${() => '1px solid' + Colors.colorGrayLighter};
  border-left: ${() => '1px solid' + Colors.colorGrayLighter};
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px) {
    width: 100%;
  }
  span {
    padding: 0 2rem;
    font-size: 1.4rem;
    color: ${() => Colors.colorGrayLight};
  }
`;
export default AddGuestsItem;
