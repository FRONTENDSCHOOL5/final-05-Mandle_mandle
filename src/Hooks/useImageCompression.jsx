import imageCompression from 'browser-image-compression';

const useImageCompression = () => {
  const compressImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const options = {
        maxSizeMB: 10,
        maxWidthOrHeight: 256,
        useWebWorker: true,
      };

      const compressedBlob = await imageCompression(blob, options);
      return URL.createObjectURL(compressedBlob);
    } catch (error) {
      return;
    }
  };

  return { compressImage };
};

export default useImageCompression;
