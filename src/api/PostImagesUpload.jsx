import axios from 'axios';
export const PostImagesUpload = async (files) => {
  console.log('파일 담긴 것 확인', files);

  const formData = new FormData();
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
  } else {
    formData.append('image', files);
  }

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/image/uploadfiles',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log('파일 받아온 것 확인', response);
    //여기에 http url감싸기
    const filenames =
      response.data.length > 1
        ? response.data
            .map(
              (image) => `https://api.mandarin.weniv.co.kr/${image.filename}`,
            )
            .join(',')
        : `https://api.mandarin.weniv.co.kr/${response.data[0].filename}`;

    return filenames;
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
  }
};
