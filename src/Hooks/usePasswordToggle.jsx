import { useState } from 'react';

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  return { toggleShowPassword, showPassword };
};

export default usePasswordToggle;
