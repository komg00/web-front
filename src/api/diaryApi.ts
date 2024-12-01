// src/api/diaryApi.ts
import axios from "axios";

export const fetchDiaries = async (): Promise<Diary[]> => {
  try {
    const response = await axios.get<Diary[]>(
      "http://34.237.154.47:8080/users/me/game_diaries",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          Accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("일지 목록을 가져오는 중 오류 발생:", error);
    throw error;
  }
};
