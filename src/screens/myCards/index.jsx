import Card from '../../components/card';
import CustomHeader from '../../components/customHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { jsonServer } from '../../services/axios';
import { Platform } from 'react-native';
import * as S from './styles';
import axios from 'axios';
import { useEffect } from 'react';

function MyCards() {
  const insets = useSafeAreaInsets();
  // const [cards, setCards] = useState();

  useEffect(() => {
    console.log('sendo executado');
    const iosUrl = 'http://localhost:3000/';
    const androidUrl = 'http://10.0.2.2/';
    const url = Platform.OS === 'ios' ? iosUrl : androidUrl;
    (async () => {
      const response = await axios.get(url);
      console.log(response);
    })();
  }, []);

  return (
    <>
      <S.CustomSafeArea
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      />
      <CustomHeader />
      <S.Container>
        <S.CustomScrollView
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Card
            TypeCard="Green Card"
            Name="João Carlos Pereira"
            NumberCard="**** **** **** 1234"
            validity="06/29"
          />
        </S.CustomScrollView>
      </S.Container>
    </>
  );
}

export default MyCards;
