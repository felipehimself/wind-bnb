import { Colors } from '../../../constants/colors';
import { IOptions } from '../../../interfaces/dataInterface';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { ButtonOptions } from '../../../shared/GlobalStyledComponents';
import * as Style from './style';

interface IProps extends IOptions {
  guests: { children: number; adults: number };
  defineGuests: (type: string, option: string) => void;
}

const OptionsItem: React.FC<IProps> = ({
  type,
  rule,
  guests,
  defineGuests,
}) => {
  return (
    <Style.Li>
      <Style.H4>{type}</Style.H4>
      <Style.P>{rule}</Style.P>
      <Style.FlexContainer>
        <ButtonOptions onClick={() => defineGuests(type, 'minus')}>
          <IoRemoveOutline color={Colors.colorGrayLight} />
        </ButtonOptions>
        <Style.Span>{guests[type as keyof typeof guests]}</Style.Span>
        <ButtonOptions onClick={() => defineGuests(type, 'add')}>
          <IoAddOutline color={Colors.colorGrayLight} />
        </ButtonOptions>
      </Style.FlexContainer>
    </Style.Li>
  );
};

export default OptionsItem;
