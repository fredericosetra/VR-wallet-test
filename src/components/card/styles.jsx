import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 60};
  max-width: 300px;
  height: 180px;
  border-radius: 16px;
  background-color: #a5ff32;
  padding: 30px 15px 30px 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fontColors.card};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 34px;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
  padding-bottom: 4px;
`;
