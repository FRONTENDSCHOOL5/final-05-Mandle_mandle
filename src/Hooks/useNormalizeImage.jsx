export default function useNormalizeImage(image, basicImg) {
  const regex = /^\d/;
  const accountImage = image.replace(
    'https://mandarin.api.weniv.co.kr/' || 'https://api.mandarin.weniv.co.kr/',
    '',
  );

  if (regex.test(accountImage)) {
    return `https://api.mandarin.weniv.co.kr/${accountImage}`;
  } else {
    return basicImg;
  }
}
