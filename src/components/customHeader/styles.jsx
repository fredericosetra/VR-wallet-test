import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BoxTitle = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 66px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 22px;
  line-height: 24px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 23.5px;
  padding: 8px;
`;

export const BoxCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

export const TitlePage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.fontColors.secondary};
`;
