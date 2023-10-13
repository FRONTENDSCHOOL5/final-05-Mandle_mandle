import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
export default function useScroll(data, id) {
  // 1. 영역이 전체화면이 아닌 overflow-y:scroll이 적용되는 태그를 기준으로 하기 때문에
  // 해당 태그에 id를 지정한 후 document.querySelector로 불러와 사용한다.
  // 2. 스크롤이 적용되는 데이터 배열을 props(data-postList, followerList 등)로 가져온 이유는 보통 이 데이터 배열은 값을 불러오기 전 null값이 들어있는 상태에서 값이 변경되기 때문에
  // 데이터 배열을 감싸는 태그인 scrollArea에도 처음에 null값이 담겨 오류가 발생할 수 있는 것을 막기 위함

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const scrollArea = document.querySelector(id);
    console.log('작동중', scrollArea.scrollTop);
    const handleScroll = throttle(() => {
      console.log('Throttled scroll event!');
      if (
        scrollArea.scrollTop + scrollArea.clientHeight + 1 >=
        scrollArea.scrollHeight
      ) {
        console.log(
          scrollArea.scrollTop,
          scrollArea.clientHeight,
          scrollArea.scrollHeight
        );
        setIsBottom(
          scrollArea.scrollTop + scrollArea.clientHeight + 1 >=
            scrollArea.scrollHeight
        );
      }
    }, 2000); // 여기서 200은 200ms 간격으로 함수가 호출되게 설정합니다. 원하는 값으로 조절 가능합니다.

    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll);
    }

    // Clean up event listener on unmount
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return isBottom;
}
