import { FlexContainer } from '../../shared/GlobalStyledComponents';
import { IPlaces } from '../../interfaces/dataInterface';
import star from './../../assets/star.svg';
import * as Style from './style';

const StaysListItem: React.FC<IPlaces> = ({ photo, rating, title, type }) => {
  return (
    <Style.Article>
      <Style.Container>
        <Style.Img src={photo} alt={title} />
      </Style.Container>
      <FlexContainer margin='1rem 0 0 0'>
        <Style.P>{type}</Style.P>
        <FlexContainer>
          <Style.Icon src={star} alt='rating' />
          <Style.Span>{rating}</Style.Span>
        </FlexContainer>
      </FlexContainer>
      <Style.P size='1.4rem' weight='bold'>
        {title}
      </Style.P>
    </Style.Article>
  );
};

export default StaysListItem;
