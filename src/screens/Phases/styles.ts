import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";
import theme from '@global/styles/theme';

export const Container = styled(LinearGradient).attrs({ 
  colors: ['#0E1647','#0A1033'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}
)`
  flex: 1;
  background: ${({theme}) => theme.colors.primary.secondary80};
`;


export const Content = styled.View`
  flex: 1;
`;

export const SectionContainer = styled.View`
  flex: 1;
  margin-top: 30px ;

`;

export const SectionHeader = styled.View`
  flex-direction: row;
  background: ${({theme}) => theme.colors.primary.surface_secondary};
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const SectionHeaderContent = styled.View`
  width: 80%;
  margin-left: 8px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.text.bold};
  font-size: 30px;
  color: ${({theme}) => theme.colors.primary.white};
`;

export const SectionContentText = styled.Text`
  font-family: ${({theme}) => theme.fonts.text.bold};
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary.white};
`;

export const ButtonContainer = styled.View`
    /* flex: 1; */
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 50;
`;


export const Clickable = styled.TouchableNativeFeedback`
  /* background: red; */
      flex-direction: column;
    justify-content: center;
`;

export const Button = styled.View`
    height: 130;
    width: 130;
    border-radius: 10;
    /* background: ${({theme}) => theme.colors.primary.textTitle}; */
    background: #171F52;
    flex-direction: column;
    justify-content: center;
    elevation: 10;


`;
// #E5E5E5
// #B7B7B7
export const MainButton = styled(LinearGradient).attrs({ 
  colors: ['#1D2766','#171F52'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}
)`
    height: 126px;
    width: 126px;
    border-radius: 10px;
    /* position: absolute; */
    bottom: 6;
    left: 4;
    elevation: 10;

    /* background: ${({theme}) => theme.colors.primary.textBody}; */
`;


export const SectionBody = styled.View`
padding: 30px;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background: #59CB01; */

  /* align-self: flex-end; */
`;

export const styles = {
    shadowColor: theme.colors.primary.gray,
    shadowOffset: {
        width: 0, height: 10
    }, 
    
    shadowOpacity: .3,
    shadowRadius: 20,
    elevation: 8,
}
// export const Button = styled.TouchableOpacity`
//   background: ${({theme}) => theme.colors.primary.brand};
//   width: 30%;
//   height: 45px;
//   border-radius: 12px;
//     justify-content: center;
// `

export const ButtonText = styled.Text`
    color:  ${({theme}) => theme.colors.primary.white};
    font-size: 18px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.text.bold};
`;