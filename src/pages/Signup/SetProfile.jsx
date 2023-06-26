import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SignUpAtom } from '../../Store/AtomSignupState';
import PostSignUp from '../../api/PostSignup';
import PostIdValid from '../../api/PostIdValid';
import Input from '../../components/Common/Account/Input';
import useProfileInput from '../../Hooks/useProfileInput';
import UploadProfile from '../../components/Common/UploadProfile';
import AccountHeader from '../../components/Common/Account/AccountHeader';
import StartButtonImg from '../../assets/img/L-start-button(clay).svg';
import DisabledButtonImg from '../../assets/img/L-Start-Disabled-button(clay).svg';
import {
  AccountForm,
  Description,
  ButtonImgStyle,
  ErrorMessage,
} from '../../components/Common/Account/AccountStyle';

const SetProfile = () => {
  const url = 'https://api.mandarin.weniv.co.kr/';

  const navigate = useNavigate();
  const signupInfo = useRecoilValue(SignUpAtom);
  const [userInfo, setUserInfo] = useState({ ...signupInfo });
  const [image, setImage] = useState('');
  const [accountValid, setAccountValid] = useState(true);
  const [accountAlertMsg, setAccountAlertMsg] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [usernameAlertMsg, setUsernameAlertMsg] = useState('');
  const { inputValues, handleInputChange, buttonImg } = useProfileInput(
    StartButtonImg,
    DisabledButtonImg
  );
  const { username, accountname, intro } = inputValues;
  const handleProfileImageResponse = (fileName) => {
    setImage(fileName);
  };

  const handleUsernameValid = () => {
    if (username.length >= 2 && username.length <= 10) {
      setUsernameAlertMsg('');
      setUsernameValid(true);
    } else {
      setUsernameAlertMsg('유저 이름은 2자 이상~10자 이내여야 합니다.');
      setUsernameValid(false);
    }
  };

  //아이디 유효성 검사
  const handleAccountNameValid = async () => {
    const pattern = /^[A-Za-z0-9_.]+$/;
    if (pattern.test(accountname)) {
      const validMessage = await PostIdValid(accountname);
      setAccountAlertMsg(validMessage);
      validMessage === '사용 가능한 계정ID 입니다.'
        ? setAccountValid(true)
        : setAccountValid(false);
    } else {
      setAccountAlertMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setAccountValid(false);
    }
  };

  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (username && accountname && usernameValid && accountValid) {
      const updatedAccountname = `${userInfo.type}${accountname}`;
      setUserInfo((prevValue) => {
        return {
          ...prevValue,
          username: username,
          accountname: updatedAccountname,
          intro: intro,
          image: image,
        };
      });
      navigate('/account/login');
    }
  };

  useEffect(() => {
    if (username && accountname && usernameValid && accountValid) {
      PostSignUp(userInfo);
    }
  }, [username, accountname, usernameValid, accountValid, userInfo]);

  return (
    <>
      <AccountHeader title='프로필 설정' />
      <Description>나중에 언제든지 변경할 수 있습니다.</Description>
      <AccountForm>
        <UploadProfile onResponse={handleProfileImageResponse} />
        <Input
          label='사용자 이름'
          name='username'
          type='text'
          placeholder='2-10자 이내 여야 합니다'
          onChange={handleInputChange}
          onBlur={handleUsernameValid}
          borderColor={usernameAlertMsg ? 'var(--error-color)' : '#dbdbdb'}
        />
        {usernameAlertMsg && <ErrorMessage>{usernameAlertMsg}</ErrorMessage>}
        <Input
          label='계정 ID'
          name='accountname'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          onChange={handleInputChange}
          onBlur={handleAccountNameValid}
          borderColor={accountAlertMsg ? 'var(--error-color)' : '#dbdbdb'}
        />

        {accountAlertMsg && <ErrorMessage>{accountAlertMsg}</ErrorMessage>}
        <Input
          label='소개'
          name='intro'
          type='text'
          placeholder='자신에 대해 소개해 주세요!'
          onChange={handleInputChange}
          onBlur={handleAccountNameValid}
          borderColor='#dbdbdb'
        />

        <ButtonImgStyle type='submit' onClick={handleSetProfileSubmit}>
          <img src={buttonImg} alt='' />
        </ButtonImgStyle>
      </AccountForm>
    </>
  );
};

export default SetProfile;
