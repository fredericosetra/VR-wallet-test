import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';

export const AlignButtons = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.fontColors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 30px;
`;

export const CustomLink = styled(Link)`
  margin-bottom: 20px;
`;
