import styled from 'styled-components/native';
// import { keyframes } from 'styled-components';

export const CustomSafeArea = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CustomScrollView = styled.ScrollView`
  width: 100%;
  margin-bottom: 60%;
  margin-top: 20%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

// export const heartBeat = keyframes`
//   0%
//   {
//     transform: scale( .75 );
//   }
//   20%
//   {
//     transform: scale( 1.1 );
//   }
//   40%
//   {
//     transform: scale( .75 );
//   }
//   60%
//   {
//     transform: scale( 1.1 );
//   }
//   80%
//   {
//     transform: scale( .75 );
//   }
//   100%
//   {
//     transform: scale( .75 );
//   }
// `;

// animation: ${rotate} 2s linear infinite;
