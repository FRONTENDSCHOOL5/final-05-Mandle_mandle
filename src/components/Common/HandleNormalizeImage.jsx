export default function HandleNormalizeImage(image, basicImg) {
  const regex = /^\d/;
  const accountImage = image
    .replace('https://mandarin.api.weniv.co.kr/', '')
    .replace('https://api.mandarin.weniv.co.kr/', '');

  if (regex.test(accountImage)) {
    return `https://api.mandarin.weniv.co.kr/${accountImage}`;
  } else {
    return basicImg;
  }
}
