import BasicImg from '../../assets/img/basic-profile-img.svg';

export default function NormalizeImage(image) {
  const regex = /^\d/;
  const accountImage = image
    .replace('https://mandarin.api.weniv.co.kr/', '')
    .replace('https://api.mandarin.weniv.co.kr/', '');

  if (regex.test(accountImage)) {
    return `https://api.mandarin.weniv.co.kr/${accountImage}`;
  } else {
    return BasicImg;
  }
}
