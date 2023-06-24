import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GoBackNav } from '../../components/Common/TopNav';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import UploadImgBtn from '../../assets/img/img-upload-button(gray).svg';
import axios from 'axios';
import ImgNon from '../../assets/img/class-Img.svg';

export function Header() {
  return <GoBackNav />;
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

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'https://api.mandarin.weniv.co.kr/image/uploadfile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        const { filename } = response.data;
        const imageUrl = `https://api.mandarin.weniv.co.kr/${filename}`;
        setImage(imageUrl);
      } else {
        console.log('Error:', response);
      }
    } catch (error) {
      console.log('Error:', error);
    }
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
      const response = await axios.post(
        'https://api.mandarin.weniv.co.kr/product',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigate('/class');
        console.log(response);
      } else {
        console.log('Error:', response);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const isFormIncomplete =
    !image || !className || !classPrice || !classTag;

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

export const ClassRegistrationForm = styled.form`
  padding: 30px 34px;
  margin-top: 48px;
  label {
    font-size: 12px;
    color: #767676;
  }
`;

export const ImgBox = styled.div`
  width: 322px;
  height: 204px;
  border-radius: 10px;
  margin: 18px 0 30px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

`;

export const ImgBtn = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  cursor: pointer;
`;

export const ClassInput = styled.input`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;
  border-bottom: 1px solid #dbdbdb;
  &::placeholder {
    font-size: 14px;
    color: #dbdbdb;
  }
`;

export const AddBtn = styled.button`
  width: 90px;
  text-align: center;
  font-size: 14px;
  background-color: ${props => props.disabled ? '#B1D4C3' : '#036635'};
  color: #fff;
  padding: 7px 32px;
  box-sizing: border-box;
  border-radius: 32px;
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 2;
`;
