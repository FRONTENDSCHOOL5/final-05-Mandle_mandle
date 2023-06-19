import axios from "axios";

export const PostUpload = (formData) => {
  return axios.post("/image/uploadfiles", formData);
};
