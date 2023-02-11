import * as S from './styles';
import { Text } from 'react-native';
import Diamond from '../../assets/diamond.svg'; 
import Progress from '../../assets/Progress.svg'; 


export function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContainer>
          <Progress height={28} />
          <S.HeaderText>40%</S.HeaderText>
        </S.HeaderContainer>
        <S.HeaderContainer>
          <Diamond height={28} />
          <S.HeaderText>20</S.HeaderText>
        </S.HeaderContainer>
      </S.Header>
    </S.Container>
  );
}