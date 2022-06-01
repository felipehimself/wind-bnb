import { useGlobalContext } from '../../../store/context';

import { Input } from './style';

const LocationInput: React.FC = () => {
  const { isFocused, location, setLocation, setIsFocused } = useGlobalContext();

  return (
    <Input
      value={location ?? ''}
      onChange={(e) => setLocation(e?.target?.value)}
      placeholder='Location'
      isFocused={isFocused}
      onClick={() => setIsFocused(true)}
    />
  );
};

export default LocationInput;
