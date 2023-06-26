import { useState } from 'react';

export default function UserInfoInput(button, disabledButton) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonImg, setButtonImg] = useState(disabledButton);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [pwErrorMessage, setPwErrorMessage] = useState('');
  const handleActiveButton = () => {
    setButtonImg(
      emailErrorMessage === '' &&
        pwErrorMessage === '' &&
        email !== '' &&
        password !== ''
        ? button
        : disabledButton,
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
    emailErrorMessage,
    pwErrorMessage,
    setEmailErrorMessage,
    setPwErrorMessage,
  };
}
