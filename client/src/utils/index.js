import axios from "axios";
const API_URL = "http://localhost:8800/api-v1";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }) => {
  // console.log("apiRequest__", url, token, data, method);
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return result?.data;
  } catch (error) {
    const err = error.response.data;
    console.log(error);
    return {
      status: err.success,
      message: err.message,
    };
  }
};

export const handleFileUpload = async (uploadFile) => {
  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "Project");
  const cloudinary_url = import.meta.env.VITE_CLOUDINARY_URL;
  console.log(cloudinary_url);
  try {
    const response = await axios.post(
      cloudinary_url,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.log("error while uploading on cloudinary", error);
  }
};

export const updateURL = ({
  pageNum,
  query,
  cmpLoc,
  sort,
  navigate,
  location,
  jType,
  exp,
}) => {
  const params = new URLSearchParams();
  if (pageNum && pageNum > 1) {
    params.set("page", pageNum);
  }
  if (query) {
    params.set("search", query);
  }
  if (cmpLoc) {
    params.set("location", cmpLoc);
  }
  if (sort) {
    params.set("sort", sort);
  }
  if (jType) {
    params.set("jtype", jType);
  }
  if (exp) {
    params.set("exp", exp);
  }

  const newURL = `${location.pathname}?${params.toString()}`;
  navigate(newURL, { replace: true });
  return newURL;
};

export const emptyProfile = "https://icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
