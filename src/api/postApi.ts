import axios from "axios";

const API_BASE_URL = "http://34.237.154.47:8080";

const AUTH_TOKEN = localStorage.getItem("accessToken");

console.log("Auth token; ", AUTH_TOKEN);
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

export const likePost = async (postId: number): Promise<void> => {
  const url = `${API_BASE_URL}/posts/${postId}/likes`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: "",
  });

  window.location.reload();
  if (!response.ok) {
    throw new Error(
      `Failed to like post: ${response.status} - ${response.statusText}`
    );
  }
};
