import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineVolumeUp,
  HiOutlineSparkles,
  HiOutlineDotsCircleHorizontal,
  HiOutlineUser,
  HiOutlineCalendar,
  HiSearch,
  HiOutlineBookOpen,
  HiOutlineQuestionMarkCircle,
  HiOutlineClipboardList,
  HiOutlineMusicNote,
  HiOutlinePencilAlt,
  HiOutlineNewspaper,
  HiOutlinePlusCircle,
  HiStatusOnline,
} from "react-icons/hi";

export const homeMenu = [
  { title: "시야 정보", icon: HiOutlineLocationMarker },
  { title: "관람 일지", icon: HiOutlineNewspaper },
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
    title: "추천 클립",
    icon: HiSearch,
    link: "/mypage/video",
  },
  { title: "프로필 수정", icon: HiOutlinePencilAlt, link: "/mypage/edit" },
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

export const dashboardMenu = [
  { title: "중계", icon: HiOutlinePlusCircle, link: "/dashboard" },
  {
    title: "득점",
    icon: HiStatusOnline,
    link: "/dashboard/score",
  },
];
