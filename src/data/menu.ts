import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineVolumeUp,
  HiOutlineSparkles,
  HiOutlineDotsCircleHorizontal,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineVideoCamera,
  HiOutlineCog,
} from "react-icons/hi";

export const homeMenu = [
  { title: "시야 정보", icon: HiOutlineLocationMarker },
  { title: "관람 일지", icon: HiOutlineCalendar },
  { title: "토론", icon: HiOutlineChatAlt2 },
  { title: "잡담/수다", icon: HiOutlineVolumeUp },
  { title: "꿀팁 공유", icon: HiOutlineSparkles },
  { title: "기타", icon: HiOutlineDotsCircleHorizontal },
];

export const mypageMenu = [
  { title: "프로필", icon: HiOutlineUser },
  { title: "야구 관람 일지", icon: HiOutlineCalendar },
  { title: "추천 경기 클립", icon: HiOutlineVideoCamera },
  { title: "환경설정", icon: HiOutlineCog },
];
