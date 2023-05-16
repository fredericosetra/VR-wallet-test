import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackgroundShape from '../../components/backgroundShape';
import arrowLeft from '../../../assets/Icons/arrowLeft.png';
import InputText from '../../components/InputText';
import SimpleButton from '../../components/SimpleButton';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './styles';

function RegisterCardsScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <BackgroundShape>
      <S.Container
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <S.BoxHeader>
          <S.CustomLink to={{ screen: 'Home' }}>
            <S.CustomImage source={arrowLeft} />
          </S.CustomLink>
          <S.HeaderText>cadastro</S.HeaderText>
          <S.ItemAlign />
        </S.BoxHeader>

        <S.Title>Wallet Test</S.Title>

        <ScrollView style={{ flex: 1 }}>
          <S.BoxForm>
            <InputText
              iconActive
              title="número do cartão"
              typeKeyboard="numeric"
              colorTitle="#bbbbbb"
            />
            <InputText title="nome do titular do cartão" typeKeyboard="text" />
            <S.AlignInputs>
              <InputText
                title="vencimento"
                typeKeyboard="numeric"
                InputHalfSize
                placeholder="00/00"
              />
              <S.SpacingFields />
              <InputText
                title="código de segurança"
                typeKeyboard="numeric"
                InputHalfSize
                placeholder="***"
              />
            </S.AlignInputs>

            <SimpleButton
              sizeFull
              title="Avançar"
              backgroundColor={theme.colors.buttonPrimary}
              fontColor={theme.colors.fontColors.title}
            />
          </S.BoxForm>
        </ScrollView>
      </S.Container>
    </BackgroundShape>
  );
}

export default RegisterCardsScreen;
