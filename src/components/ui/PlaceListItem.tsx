import styled from 'styled-components';
import { IPlaces } from '../../interfaces/dataInterface';
import locationPin from '././../../assets/location.svg';
import { Colors } from '../../constants/colors';

interface IProps extends IPlaces {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const PlaceListItem: React.FC<IProps> = ({ city, country, setLocation }) => {
  return (
    <Li onClick={() => setLocation(city)}>
      <img className='pin-icon' src={locationPin} alt='location pin' />
      <span>
        {city}, {country}
      </span>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 1px;
  cursor: pointer;

  .pin-icon {
    filter: invert(28%) sepia(0%) saturate(4241%) hue-rotate(211deg)
      brightness(99%) contrast(84%);
    height: 1.5rem;
    margin-right: 0.6rem;
  }
  span {
    border-bottom: 1px solid transparent;
    transition: border 0.3s ease;
  }

  span:hover {
    border-bottom: ${() => '1px solid ' + Colors.colorGrayLight};
  }
`;
export default PlaceListItem;
