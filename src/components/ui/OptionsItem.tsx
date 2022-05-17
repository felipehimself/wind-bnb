import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { IOptions } from '../../interfaces/dataInterface';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const OptionsItem: React.FC<IOptions> = ({ type, rule }) => {
  return (
    <Li>
      <p className='type'>{type}</p>
      <p className='rules'>{rule}</p>
      <span className='btn-container'>
        <button className='btn btn--minus'>
          {/* <IoRemoveOutline color={Colors.colorGrayLight} /> */}
          -
        </button>
        <span className='count'>1</span>
        <button className='btn btn--plus'>
          {/* <IoAddOutline color={Colors.colorGrayLight} /> */}
          +
        </button>
      </span>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  /* gap: 0.5rem; */

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
