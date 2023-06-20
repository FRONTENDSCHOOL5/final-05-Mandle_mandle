import axios from "axios";
export const PostUpload = async (files) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("image", files[i]);
  }

  try {
    const response = await axios.post(
      "https://api.mandarin.weniv.co.kr/image/uploadfiles",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const filenames = response.data.map((image) => image.filename);
    const mergedFilenames = filenames.join(",");

    return mergedFilenames;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
};
