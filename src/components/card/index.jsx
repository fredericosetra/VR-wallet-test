import * as S from './styles';

function Card({ TypeCard, Name, NumberCard, validity }) {
  return (
    <S.Container>
      <S.Title>{TypeCard}</S.Title>
      <S.SubTitle>{Name}</S.SubTitle>
      <S.SubTitle>{NumberCard}</S.SubTitle>
      <S.SubTitle>Validade {validity}</S.SubTitle>
    </S.Container>
  );
}

export default Card;
