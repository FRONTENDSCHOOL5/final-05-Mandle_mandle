import React, { useState } from 'react';

export default function ImageHandleHook() {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = async (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages];
    if (imagesArray.length + files.length > 3) {
      alert('이미지는 최대 3개까지 업로드가 가능합니다.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > 1024 * 1024 * 10) {
        alert('10MB 이상의 이미지는 업로드 할 수 없습니다.');
        return;
      }
      if (!file.name.match(/\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
        alert('이미지 파일만 업로드가 가능합니다.');
        return;
      }

      imagesArray.push(file);
    }

    setSelectedImages(imagesArray);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };
  console.log(selectedImages);

  return {
    selectedImages,
    setSelectedImages,
    handleImageChange,
    handleDeleteImage,
  };
}
