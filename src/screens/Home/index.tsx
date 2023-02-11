import * as S from './styles';
import { Text } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesType } from '@routes/index';
type IntroNavigationProp = NativeStackScreenProps<RoutesType, "Home">;

export function Home({navigation}: IntroNavigationProp) {
  return (
    <S.Container>
      <S.Content></S.Content>
      <S.Footer>
        <S.Button 
          style={S.styles}
          onPress={()=>navigation.navigate('Phases')}
          >
          <S.ButtonText>start</S.ButtonText>
        </S.Button>
      </S.Footer>
    </S.Container>
  );
}