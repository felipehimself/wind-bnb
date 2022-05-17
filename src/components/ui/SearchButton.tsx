import styled from 'styled-components';
import { useGlobalContext } from '../../store/context';
import searchIcon from './../../assets/search.svg';
import { IisFocused } from '../../interfaces/propsInterfaces';
import { Colors } from '../../constants/colors';

const SearchButton: React.FC = () => {
  const { isFocused, setIsFocused, setOptionsToFilter, guests, location } = useGlobalContext();

  const totalGuests = guests?.adults + guests?.children;

  const filterItens=()=>{
    setOptionsToFilter({city:location, maxGuests: totalGuests})
    setIsFocused(false)
  }


  return (
    <Wrapper isFocused={isFocused} onClick={filterItens}>
      <div  className='items-container'>
        <img
          className='items-container__img'
          src={searchIcon}
          alt='search icon'
        />
        {isFocused && <span className='items-container__text'>Search</span>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button<IisFocused>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 4.8rem;
  padding: ${(props) => props.isFocused? 0 : '1rem 3rem'};
  transition: flex 0.3s ease;
  border: none;
  background-color: transparent;
  flex: ${(props) => props.isFocused && 1};

  @media screen and (max-width: 540px)  {
    flex: 0.5
  }

  .items-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%
  }

  .items-container__img {
    filter: invert(47%) sepia(53%) saturate(2558%) hue-rotate(330deg)
      brightness(100%) contrast(82%);
  }

  .items-container__text {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${()=> Colors.colorPrimary}
  }

  @media screen and (max-width: 540px) {
    
    .items-container__text {
      display: none
    }

  
}

  
`;
export default SearchButton;
