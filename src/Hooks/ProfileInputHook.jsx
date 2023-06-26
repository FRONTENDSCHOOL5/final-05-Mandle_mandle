import { React, useState, useEffect } from 'react';
import DisabledButtonImg from '../assets/img/L-Disabled-button(clay).svg';
import ClayButtonImg from '../assets/img/L-start-button(clay).svg';
export default function ProfileInputHook() {
  const [inputValues, setInputValues] = useState({
    username: '',
    accountname: '',
    intro: '',
  });

  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value.trim(),
    }));
  };

  useEffect(() => {
    handleActiveButton();
  }, [inputValues]);

  const handleActiveButton = () => {
    const { username, accountname, intro } = inputValues;
    if (username !== '' && accountname !== '' && intro !== '') {
      setButtonImg(ClayButtonImg);
    } else {
      setButtonImg(DisabledButtonImg);
    }
  };

  return [
    inputValues,
    handleInputChange,
    buttonImg,
    setButtonImg,
    DisabledButtonImg,
  ];
}
