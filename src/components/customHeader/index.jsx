import arrowLeft from '../../../assets/Icons/arrowLeft.png';
import plus from '../../../assets/Icons/plus.png';
import { Image } from 'react-native';

import * as S from './styles';

function CustomHeader() {
  return (
    <S.Container>
      <S.BoxTitle
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <S.CustomLink to={{ screen: 'Home' }}>
          <Image source={arrowLeft} />
        </S.CustomLink>
        <S.Title>Wallet Test</S.Title>
        <S.CustomLink to={{ screen: 'RegisterCards' }}>
          <Image source={plus} style={{ marginRight: 23.5 }} />
        </S.CustomLink>
      </S.BoxTitle>

      <S.BoxCard>
        <S.TitlePage>Meus cartões</S.TitlePage>
      </S.BoxCard>
    </S.Container>
  );
}

export default CustomHeader;
