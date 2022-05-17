import styled from 'styled-components';
import { useGlobalContext } from '../../store/context';
import searchIcon from './../../assets/search.svg';
import { IisFocused } from '../../interfaces/propsInterfaces';
import { Colors } from '../../constants/colors';

const SearchButton: React.FC = () => {
  const { isFocused } = useGlobalContext();

  return (
    <Wrapper isFocused={isFocused}>
      <div className='items-container'>
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

const Wrapper = styled.div<IisFocused>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 4.8rem;
  padding: ${(props) => props.isFocused? 0 : '1rem 3rem'};
  transition: flex 0.3s ease;

  flex: ${(props) => props.isFocused && 1};

  .items-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem
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

  
`;
export default SearchButton;
