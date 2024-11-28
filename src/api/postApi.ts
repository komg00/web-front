import axios from "axios";

const API_BASE_URL = "http://34.237.154.47:8080";

const AUTH_TOKEN = localStorage.getItem("accessToken");

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: "*/*",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const fetchPosts = async (category: string, pageSize: number) => {
  try {
    const response = await apiClient.get(`/posts`, {
      params: {
        category,
        pageSize,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error("Failed to fetch posts", error);
    throw new Error(error.response?.data?.message || "API request failed");
  }
};

export const likePost = async (postId: number): Promise<any> => {
  const url = `${API_BASE_URL}/posts/${postId}/likes`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: "",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`${errorData.message || "Unknown error"}`);
  }

  const data = await response.json();
  return data;
};

export const createPost = async (
  title: string,
  content: string,
  category: string,
  imageFile?: File
): Promise<any> => {
  const formData = new FormData();

  formData.append(
    "postDTO",
    JSON.stringify({
      title: title,
      content: content,
      category: category,
    })
  );
  if (imageFile) {
    formData.append("image", imageFile);
  }

  try {
    const response = await apiClient.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Failed to create post", error);
    throw new Error(error.response?.data?.message || "API request failed");
  }
};
