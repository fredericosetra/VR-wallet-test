import * as S from './styles';

function BackgroundShape({ children }) {
  return (
    <S.Container>
      <S.DrawTopShape />
      {children}
      <S.DrawBottomShape />
    </S.Container>
  );
}

export default BackgroundShape;
