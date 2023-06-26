import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { GoBackNav } from '../../../components/Common/TopNav';
import UploadImgBtn from '../../../assets/img/img-upload-button(gray).svg';
import ImgNon from '../../../assets/img/class-Img.svg';
import { ClassRegistrationForm, ImgBox, StyledImg, ImgBtn, ClassInput, InputValidationError, AddBtn } from './ClassRegistrationStyle';
import { PostImagesUpload } from '../../../api/PostImagesUpload';
import PostClassRegistration from '../../../api/PostClassRegistration'



export default function ClassRegistration() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export function Header() {
  return <GoBackNav />
}

export function Main() {
  const [className, setClassName] = useState('');
  const [classPrice, setClassPrice] = useState('');
  const [classTag, setClassTag] = useState('');
  const [image, setImage] = useState('');
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const response = await PostImagesUpload(file);
    setImage(response);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const product = {
      itemName: className,
      price: Number(classPrice),
      link: classTag,
      itemImage: image
    };

    const requestBody = {
      product: product,
    };
    
    try {
      await PostClassRegistration({ token, navigate, requestBody });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const isFormIncomplete =
  !image || className.length < 2 || className.length > 15 || !classPrice || !classTag;


  return (
    <ClassRegistrationForm onSubmit={handleRegisterSubmit}>
      <h1 className='a11y-hidden'>클래스 등록창</h1>

      <label className='MainImage'>이미지 등록
        <ImgBox>
          <StyledImg src={image || ImgNon} alt='클래스 이미지' />
          <ImgBtn type='button'>
            <img src={UploadImgBtn} alt='이미지 업로드' />
            <input
              type='file'
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </ImgBtn>
        </ImgBox>
      </label>

      <label className='a11y-hidden'>클래스 이름</label>
      <ClassInput
        type='text'
        onChange={(e) => {
          setClassName(e.target.value.trim());
        }}
        placeholder='클래스 이름'
      />
      {(className && (className.length < 2 || className.length > 15)) ? (
        <InputValidationError>
          클래스 이름은 2자 이상, 15자 이하여야 합니다.
        </InputValidationError>
      ) : null}

      <label className='a11y-hidden'>클래스 태그</label>
      <ClassInput
        type='text'
        onChange={(e) => {
          setClassTag(e.target.value.trim());
        }}
        placeholder='클래스 태그'
      />

      <label className='a11y-hidden'>클래스 가격</label>
      <ClassInput
        type='number'
        step={500}
        min={0}
        onChange={(e) => {
          setClassPrice(e.target.value.trim());
        }}
        placeholder='클래스 가격'
      />

      <AddBtn type='submit' disabled={isFormIncomplete}>저장</AddBtn>
    </ClassRegistrationForm>
  );
}