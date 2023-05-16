import { useTheme } from 'styled-components/native';
import SimpleButton from '../../components/SimpleButton';
import BackgroundShape from '../../components/backgroundShape';
import { Link } from '@react-navigation/native';
import * as S from './styles';

function Home() {
  const theme = useTheme();

  return (
    <BackgroundShape>
      <S.AlignButtons>
        <S.Title>Wallet Test</S.Title>
        <S.CustomLink to={{ screen: 'MyCards' }}>
          <SimpleButton
            title="meus cartões"
            backgroundColor={theme.colors.cardColors.primary}
            fontColor={theme.colors.fontColors.title}
          />
        </S.CustomLink>
        <Link to={{ screen: 'RegisterCards' }}>
          <SimpleButton
            title="cadastrar cartão"
            backgroundColor={theme.colors.cardColors.secondary}
            fontColor={theme.colors.fontColors.primary}
          />
        </Link>
      </S.AlignButtons>
    </BackgroundShape>
  );
}

export default Home;
