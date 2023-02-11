import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";
import theme from '@global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.primary.background};
`;


export const Content = styled.View`
  flex: 1;
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
export const Button = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.primary.brand};
  width: 30%;
  height: 45px;
  border-radius: 12px;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color:  ${({theme}) => theme.colors.primary.white};
    font-size: 18px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.text.bold};
`;