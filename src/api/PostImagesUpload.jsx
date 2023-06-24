import axios from 'axios';
export const PostImagesUpload = async (files) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('image', files[i]);
  }

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/image/uploadfiles',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    //여기에 http url감싸기
    const filenames = response.data.map(
      (image) => `https://api.mandarin.weniv.co.kr/${image.filename}`
    );
    const mergedFilenames = filenames.join(',');

    return mergedFilenames;
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    throw error;
  }
};

// 일단 이미지는 http로 감싸는 걸 디폴트로 한다.
// 새로 올린 이미지는 img src로 보여줄 때  http가 들어있는 것은 대로
// 이미지를 보낼 때
