export default function CalTimeAgo(serverTime) {
  const now = new Date(); // 현재 시간
  const createdTime = new Date(serverTime);
  const diff = Math.floor((now - createdTime) / 1000); // 현재 시간과 주어진 시간의 차이를 초 단위로 계산
  if (diff < 60) {
    return `지금`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}분 전`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}시간 전`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days}일 전`;
  }
}
