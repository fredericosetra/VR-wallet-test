import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const DrawTopShape = styled.View`
  position: absolute;
  top: -10%;
  left: -25%;
  width: 90%;
  height: 30%;
  background-color: #eeeeee33;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  transform: rotate(140deg);
  z-index: -1;
`;

export const DrawBottomShape = styled(DrawTopShape)`
  top: 80%;
  left: 35%;
  transform: rotate(320deg);
`;
