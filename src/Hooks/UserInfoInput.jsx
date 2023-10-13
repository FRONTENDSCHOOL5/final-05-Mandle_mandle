import { useState, useEffect } from 'react';

export default function UserInfoInput(button, disabledButton, type) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [buttonImg, setButtonImg] = useState(disabledButton);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [pwErrorMessage, setPwErrorMessage] = useState('');
  useEffect(() => {
    handleActiveButton();
  }, [email, password, confirmedPassword, emailErrorMessage, pwErrorMessage]);

  const handleActiveButton = () => {
    const isFormFilled = email.trim().length > 0 && password.trim().length > 0;
    const isFormValid = emailErrorMessage === '' && pwErrorMessage === '';
    const isFormConfirmed =
      password && confirmedPassword && password === confirmedPassword;

    console.log(
      isFormFilled,
      isFormValid,
      isFormConfirmed,
      emailErrorMessage,
      pwErrorMessage,
    );

    setButtonImg(
      type === 'signup'
        ? isFormFilled && isFormValid && isFormConfirmed
          ? button
          : disabledButton
        : isFormFilled && isFormValid
        ? button
        : disabledButton,
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value.trim());
    } else if (name === 'password' || name === 'password-initial') {
      setPassword(value.trim());
    } else if (name === 'password-confirm') {
      setConfirmedPassword(value.trim());
    }

    handleActiveButton();
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    buttonImg,
    confirmedPassword,
    setConfirmedPassword,
    handleInputChange,
    emailErrorMessage,
    pwErrorMessage,
    setEmailErrorMessage,
    setPwErrorMessage,
  };
}
