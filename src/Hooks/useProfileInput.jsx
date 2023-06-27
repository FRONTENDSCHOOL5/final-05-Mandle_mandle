import { useState, useEffect } from 'react';

export default function useProfileInput(ButtonImg, DisabledButtonImg) {
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
  }, [inputValues, ButtonImg, DisabledButtonImg]);

  const handleActiveButton = () => {
    const { username, accountname, intro } = inputValues;
    if (username !== '' && accountname !== '' && intro !== '') {
      setButtonImg(ButtonImg);
    } else {
      setButtonImg(DisabledButtonImg);
    }
  };

  return { inputValues, handleInputChange, buttonImg, handleActiveButton };
}
