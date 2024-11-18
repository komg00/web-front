export interface Diary {
  record_id: number;
  match_date: string;
  match_place: string;
  seat: string;
  team1_image_path: string;
  team2_image_path: string;
  team1_score1: number;
  team2_score: number;
  match_details: string;
  photo_path?: string;
}

export const diaryList: Diary[] = [
  {
    record_id: 1,
    match_date: "2024. 03. 23",
    match_place: "SSG 랜더스 필드",
    seat: "404블록",
    team1_image_path: "/assets/images/club/ssg.svg",
    team2_image_path: "/assets/images/club/lotte.svg",
    team1_score1: 5,
    team2_score: 3,
    match_details: "개막전도 승리....!! 역시 난 승리 요정",
  },
  {
    record_id: 2,
    match_date: "2024. 08. 15",
    match_place: "고척스카이돔",
    seat: "401구역",
    team1_image_path: "/assets/images/club/kia.svg",
    team2_image_path: "/assets/images/club/kiwoom.svg",
    team1_score1: 12,
    team2_score: 1,
    match_details: "고척돔 크림새우 맛있다...김도영 3030도 직관했다 ><",
  },
];
