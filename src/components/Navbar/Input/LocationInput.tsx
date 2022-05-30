import styled from 'styled-components';
import { Colors } from '../../../constants/colors';
import { useGlobalContext } from '../../../store/context';
import { IisFocused } from '../../../interfaces/propsInterfaces';

const LocationInput:React.FC = () => {
  const { isFocused, location, setLocation, setIsFocused } = useGlobalContext();
  console.log(location);
  
  return (
    <Input
      value={location ?? ''}
      onChange={(e) => setLocation(e?.target?.value)}
      placeholder='Location'
      isFocused={isFocused}
      onClick={()=>setIsFocused(true)}
    />
  );
};

const Input = styled.input<IisFocused>`
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  border: none;
  text-align: center;
  font-size: 1.4rem;
  height: 4.8rem;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px) {
    
    width: 100%;
  
}

  :focus {
    outline: none;
  }
`;

export default LocationInput;
