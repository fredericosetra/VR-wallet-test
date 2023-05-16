import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Link } from '@react-navigation/native';

export const Container = styled.View``;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fontColors.secondary};
  font-size: 22px;
  line-height: 24px;
`;

export const BoxHeader = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CustomImage = styled(Image)`
  margin-left: 21px;
`;

export const ItemAlign = styled.View`
  margin-right: 42px;
`;

export const CustomLink = styled(Link)`
  margin-left: 21px;
  padding: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.fontColors.title};
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  margin-top: 156px;
`;

export const BoxForm = styled.View`
  margin: 16px 25px 0 25px;
`;

export const AlignInputs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

export const SpacingFields = styled.View`
  margin-left: 12px;
`;
