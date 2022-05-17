import styled from 'styled-components';
import { FlexContainer } from '../../styles/GlobalStyledComponents';
import { IPlaces } from './../../interfaces/dataInterface';
import star from './../../assets/star.svg';
import { Colors } from '../../constants/colors';

const StaysListItem: React.FC<IPlaces> = ({
  beds,
  city,
  country,
  maxGuests,
  photo,
  rating,
  superHost,
  title,
  type,
}) => {
  return (
    <Article>
      <div className='img-container'>
        <img className='img-container__img' src={photo} alt={title} />
      </div>
      <FlexContainer margin='1rem 0 0 0'>
        <p className='type'>{type}</p>
        <FlexContainer>
          <img className='rating-icon' src={star} alt='rating' />
          <span className='rating-text'>{rating}</span>
        </FlexContainer>
      </FlexContainer>
      <p className='description'>{title}</p>
    </Article>
  );
};

const Article = styled.article`
  width: 100%;

  .img-container__img {
    display: block;
    width: 100%;
    border-radius: 2rem;
  }

  .type {
    font-size: 1.3rem;
    color: ${() => Colors.colorDarkGray};
  }

  .description {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${() => Colors.colorDarkGray};
  }

  .rating-text {
    font-size: 1.3rem;
  }

  .rating-icon {
    height: 2rem;
    filter: invert(47%) sepia(53%) saturate(2558%) hue-rotate(330deg)
      brightness(100%) contrast(82%);
  }
`;
export default StaysListItem;
