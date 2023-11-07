import React, { useEffect, useState } from 'react';
import { Img } from './ProgressiveImgStyle';
import { useInView } from 'react-intersection-observer';
import NoImg from '../../../assets/img/No_Image_Available.jpg';
export default function ProgressiveImg({
  placeholderSrc,
  src,
  styles,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLazy, setIsLazy] = useState(true);
  const { ref, inView } = useInView();
  const customClass = isLazy ? 'loading' : 'loaded';
  useEffect(() => {
    if (inView && imgSrc === placeholderSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        //이미지 로드 완료
        setImgSrc(src);
        setIsLazy(false);
      };
      img.onerror = () => {
        //이미지 로드 실패
        setImgSrc(NoImg);
        setIsLazy(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, inView]);

  return (
    <Img
      {...{ src: imgSrc, ...props }}
      style={styles}
      className={customClass}
      loading='lazy'
      alt={props.alt || ''}
      ref={ref}
    />
  );
}
