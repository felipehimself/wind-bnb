import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { useGlobalContext } from '../../store/context';
import { IisFocused } from '../../interfaces/propsInterfaces';
const AddGuestsItem = () => {
  const { isFocused } = useGlobalContext();

  return (
    <Wrapper isFocused={isFocused}>
      <span>Add Guests</span>
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

  span {
    padding: 0 2rem;
    font-size: 1.4rem;
    color: ${() => Colors.colorGrayLight};
  }
`;
export default AddGuestsItem;
