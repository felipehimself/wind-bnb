import { useGlobalContext } from '../../../store/context';
import searchIcon from './../../../assets/search.svg';

import * as Style from './style';

const SearchButton: React.FC = () => {
  const { isFocused, setIsFocused, setOptionsToFilter, guests, location } =
    useGlobalContext();

  const totalGuests = guests?.adults + guests?.children;

  const filterItens = () => {
    setOptionsToFilter({ city: location, maxGuests: totalGuests });
    setIsFocused(false);
  };

  return (
    <Style.Button isFocused={isFocused} onClick={filterItens}>
      <Style.Container className='items-container'>
        <Style.Img
          className='items-container__img'
          src={searchIcon}
          alt='search icon'
        />
        {isFocused && (
          <Style.P className='items-container__text'>Search</Style.P>
        )}
      </Style.Container>
    </Style.Button>
  );
};

export default SearchButton;
