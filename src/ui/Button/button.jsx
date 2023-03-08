import { Text } from '../Text';
import * as S from './styles';

export const Button = (props) => {
  return (
    <S.Wrapper {...props}>
      <Text>{props.children}</Text>
    </S.Wrapper>
  );
};
