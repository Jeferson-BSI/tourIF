import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled(LinearGradient).attrs({ 
  colors: ['#1D2766','#171F52'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}
)`
  /* flex: 1; */
  padding-top: 12%;
  padding-left: 6%;
  padding-right: 8%;
  padding-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({theme}) => theme.colors.primary.brand};

`;


export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-family: ${({theme}) => theme.fonts.text.bold};
  color: ${({theme}) => theme.colors.primary.white};
  font-size: 16px;
  margin: -10px;
`;