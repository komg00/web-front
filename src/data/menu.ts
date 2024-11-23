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
  HiOutlineBookOpen,
  HiOutlineQuestionMarkCircle,
  HiOutlineClipboardList,
  HiOutlineMusicNote,
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
  { title: "프로필", icon: HiOutlineUser, link: "/mypage" },
  {
    title: "야구 관람 일지",
    icon: HiOutlineCalendar,
    link: "/mypage/diary",
  },
  {
    title: "추천 경기 클립",
    icon: HiOutlineVideoCamera,
    link: "/mypage/recommend",
  },
  { title: "환경설정", icon: HiOutlineCog, link: "/mypage/settings" },
];

export const dictionaryMenu = [
  { title: "야구 사전", icon: HiOutlineBookOpen, link: "/dictionary" },
  {
    title: "야구 퀴즈",
    icon: HiOutlineQuestionMarkCircle,
    link: "/dictionary/quiz",
  },
  {
    title: "야구 선수 위키",
    icon: HiOutlineClipboardList,
    link: "/dictionary/players",
  },
  {
    title: "구단별 응원가",
    icon: HiOutlineMusicNote,
    link: "/dictionary/songs",
  },
];
