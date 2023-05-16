import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ sizeFull }) => (sizeFull ? '100%' : Dimensions.get('window').width - 60)};
  height: 55px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
`;

export const Text = styled.Text`
  color: ${({ fontColor }) => fontColor};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;
