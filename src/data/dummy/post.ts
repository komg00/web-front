interface Post {
  post_id: number;
  contents: string;
  username: string;
  profile_image_path: string;
  date: string;
  created_at: string;
  like_count: number;
  comment_count: number;
}

export const posts: Post[] = [
  {
    post_id: 1,
    contents: "한국시리즈까지 끝나니까 삶이 무료하다",
    username: "도규는유명한MZ투수",
    profile_image_path: "/assets/images/profile.svg",
    date: "11.08.",
    created_at: "01:09",
    like_count: 2,
    comment_count: 3,
  },
  {
    post_id: 2,
    contents: "그 유명한 고척돔 크림새우를 먹어봄...더보기",
    username: "도규는유명한MZ투수",
    profile_image_path: "/assets/images/profile.svg",
    date: "08.15.",
    created_at: "23:39",
    like_count: 14,
    comment_count: 3,
  },
  {
    post_id: 3,
    contents: "와 진짜 졌어",
    username: "도규는유명한MZ투수",
    profile_image_path: "/assets/images/profile.svg",
    date: "08.15.",
    created_at: "20:02",
    like_count: 24,
    comment_count: 13,
  },
  {
    post_id: 4,
    contents: "내일 야구 보러 가는데 김도영 3030 하는 거 아님??!",
    username: "도규는유명한MZ투수",
    profile_image_path: "/assets/images/profile.svg",
    date: "08.14.",
    created_at: "01:09",
    like_count: 0,
    comment_count: 3,
  },
];
