import { useState, useEffect } from 'react';

const usePasswordConfirm = (password, confirmedPassword) => {
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  useEffect(() => {
    if (password && confirmedPassword && password === confirmedPassword) {
      setPasswordConfirmed(true);
    } else {
      setPasswordConfirmed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, confirmedPassword]);

  // useState를 이용하여 상태를 반환
  return passwordConfirmed;
};

export default usePasswordConfirm;
