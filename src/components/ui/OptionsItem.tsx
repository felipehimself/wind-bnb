import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { IOptions } from '../../interfaces/dataInterface';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { ButtonOptions } from '../../styles/GlobalStyledComponents';

interface IProps extends IOptions {
  guests: { children: number; adults: number };
  defineGuests: (type: string, option: string) => void
}

const OptionsItem: React.FC<IProps> = ({ type, rule, guests, defineGuests }) => {

  return (
    <Li>
      <p className='type'>{type}</p>
      <p className='rules'>{rule}</p>
      <div className='btn-container'>
        <ButtonOptions onClick={()=> defineGuests(type, 'minus')}>
          <IoRemoveOutline color={Colors.colorGrayLight} />
        </ButtonOptions>
        <span className='count'>{guests[type as keyof typeof guests]}</span>
        <ButtonOptions onClick={()=> defineGuests(type, 'add')}>
          <IoAddOutline color={Colors.colorGrayLight} />
        </ButtonOptions>
      </div>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  
  @media screen and (max-width: 540px) {
    
    align-items: center;
  
}


  .type {
    text-transform: capitalize;
    font-size: 1.5rem;
    color: ${() => '#030303'};
    font-weight: bold;
  }

  .rules {
    color: ${() => Colors.colorGrayLight};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .btn {
    display: flex;

    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 1.8rem;
    height: 1.8rem;
    border: ${() => '1px solid ' + Colors.colorGrayLight};
    border-radius: 4px;
    cursor: pointer;
  }

  .count {
    font-size: 1.4rem;
  }
`;
export default OptionsItem;
