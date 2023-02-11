import { Header } from '@components/Header';
import * as S from './styles';
import Info from '../../assets/Info2.svg';


import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Phases() {
  return (
    <S.Container>
      <Header />
      <S.Content>

        <S.SectionContainer>

          <S.SectionHeader>
            <S.SectionHeaderContent>
              <S.SectionTitle>Unidade 1</S.SectionTitle>
              <S.SectionContentText>Conhecendo o instituto ( IFNMG- Januária)</S.SectionContentText>
            </S.SectionHeaderContent>
            <S.Clickable>
              <Info height={56}/>
            </S.Clickable>
          </S.SectionHeader>

          <S.SectionBody>
            <S.ButtonContainer>
              <S.Clickable>
                <S.Button>
                  <S.MainButton/>
                </S.Button>
              </S.Clickable>
            </S.ButtonContainer>



            {/* <View style={styles.container}>
              <TouchableOpacity onPress={() => console.log('btn pressed')}>
                <View style={styles.buttonParent}>
                  <LinearGradient
                    colors={['#5be9aa', '#09949d']}
                    style={styles.buttonGrad}>
                  </LinearGradient>

                </View>
              </TouchableOpacity>
            </View> */}

          </S.SectionBody>


        </S.SectionContainer>

      </S.Content>
    </S.Container>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonGrad: {
    height: 150,
    width: 150,
    borderRadius: 100,
    position: 'absolute',
    bottom: 5,
    left: 5,
    elevation:1
  },
  //   buttonGradLeft: {
  //   height: 50,
  //   width: 200,
  //   borderRadius: 10,
  //   // position: 'absolute',
  //   // bottom: 5,
  //   left: 10,
  // },
  buttonParent: {
    height: 150,
    width: 155,
    // borderRadius: 100,
    backgroundColor: '#024e51',
  },
});