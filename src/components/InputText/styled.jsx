import { Dimensions, TextInput } from 'react-native';
import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: ${({ InputHalfSize }) =>
    InputHalfSize ? (Dimensions.get('window').width - 60) / 2 : '100%'};
`;

export const TitlePlaceholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ colorTitle, theme }) => (colorTitle ? colorTitle : theme.colors.fontColors.title)};
  font-size: 14px;
  line-height: 16px;
  margin: 0 0 12px 4px;
`;

export const BoxInput = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
  margin-bottom: 24px;
`;

export const CustomTextInput = styled(TextInput)`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding-left: ${({ iconActive }) => (iconActive ? '50px' : '16px')};
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  color: ${({ theme }) => theme.colors.InputText};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  line-height: 18px;
`;

export const CustomImage = styled(Image)`
  position: absolute;
  margin: 0 10px;
  z-index: 1;
`;
