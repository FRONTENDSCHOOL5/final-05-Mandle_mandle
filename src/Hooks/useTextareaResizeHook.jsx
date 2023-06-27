import { useEffect, useRef } from 'react';

const useTextareaResize = (inputValue, setInputValue) => {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const handleTextareaChange = (event) => {
    setInputValue(event.target.value);
    handleResizeHeight();
  };

  useEffect(() => {
    handleResizeHeight();
  }, [inputValue]);

  return { textarea, handleTextareaChange };
};

export default useTextareaResize;
