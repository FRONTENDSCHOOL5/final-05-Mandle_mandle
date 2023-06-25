import React, { useState } from 'react';
import ButtonImg from '../assets/img/L-button(clay).svg';
import DisabledButtonImg from '../assets/img/L-Disabled-button(clay).svg';
export default function UserInfoInput() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);

  const handleActiveButton = () => {
    setButtonImg(
      email !== '' && password !== '' ? ButtonImg : DisabledButtonImg
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value.trim());
    } else if (name === 'password') {
      setPassword(value.trim());
    }

    handleActiveButton();
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    buttonImg,
    handleInputChange,
  };
}
