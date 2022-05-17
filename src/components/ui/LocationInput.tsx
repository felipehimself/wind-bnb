import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { useGlobalContext } from '../../store/context';
import { IisFocused } from '../../interfaces/propsInterfaces';
const LocationInput = () => {
  const { isFocused } = useGlobalContext();

  return <Input placeholder='Location' isFocused={isFocused} />;
};


const Input = styled.input<IisFocused>`

  /* padding: 1.4rem 0.5rem; */
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  border: none;
  text-align: center;
  font-size: 1.4rem;
  height: 4.8rem;

  flex: ${(props) => (props.isFocused && 1)};
  

  :focus {
    outline: none;
  }
`;

export default LocationInput;
