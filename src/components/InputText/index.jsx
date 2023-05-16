import CameraIcon from '../../../assets/Icons/cameraIcon.png';
import * as S from './styled';

function InputText({ iconActive, title, colorTitle, typeKeyboard, InputHalfSize, placeholder }) {
  return (
    <S.Container InputHalfSize={InputHalfSize}>
      <S.TitlePlaceholder colorTitle={colorTitle}>{title}</S.TitlePlaceholder>

      <S.BoxInput>
        {iconActive ? <S.CustomImage source={CameraIcon} /> : ''}
        <S.CustomTextInput
          placeholder={placeholder ? placeholder : ''}
          iconActive={iconActive}
          underlineColorAndroid="transparent"
          keyboardType={typeKeyboard}
        />
      </S.BoxInput>
    </S.Container>
  );
}

export default InputText;
