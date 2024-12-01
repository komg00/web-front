import axios from "axios";

export interface MemberInfo {
  username: string;
  team: string;
  profileImageUrl: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  postList: string[]; // 실제 데이터 형식에 맞게 수정 가능
}

export const getMemberInfo = async (): Promise<MemberInfo> => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.get(
      "http://34.237.154.47:8080/api/members/info",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "*/*",
        },
      }
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(
      "Failed to fetch member info: " + (error.response?.data || error.message)
    );
  }
};
