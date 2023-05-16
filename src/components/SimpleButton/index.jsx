import * as S from './styles';

function SimpleButton({ title, backgroundColor, fontColor, sizeFull }) {
  return (
    <S.Container backgroundColor={backgroundColor} sizeFull={sizeFull}>
      <S.Text fontColor={fontColor}>{title}</S.Text>
    </S.Container>
  );
}

export default SimpleButton;
