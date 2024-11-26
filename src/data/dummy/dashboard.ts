export interface TeamData {
  name: string;
  games: number; // 총 경기 수
  wins: number; // 승리 수
  defeats: number; // 패배 수
  ties: number; // 무승부 수
  winRate: number; // 승률
  recentGames: string; // 최근 10경기 결과
}

export interface MatchData {
  homeTeam: string; // 홈 팀 이름
  awayTeam: string; // 원정 팀 이름
  homeScore: number; // 홈 팀 점수
  awayScore: number; // 원정 팀 점수
  homeLogo: string; // 홈 팀 로고
  awayLogo: string; // 원정 팀 로고
  inning: string; // 진행 상태
  date: string; // 경기 날짜
  time: string; // 경기 시간
  stadium: string; // 경기장
  pitcherHome: string; // 홈 팀 투수
  pitcherAway: string; // 원정 팀 투수
}

export interface ScoreboardRow {
  team: string; // 팀 이름
  scores: (string | number)[]; // 각 이닝 점수 및 합계 (R, H, E, B)
}

export const teamInfo: TeamData = {
  name: "KIA TIGERS",
  games: 144,
  wins: 87,
  defeats: 55,
  ties: 2,
  winRate: 0.613,
  recentGames: "5승 0무 5패",
};

export const matchInfo: MatchData = {
  homeTeam: "KIA",
  awayTeam: "두산",
  homeScore: 4,
  awayScore: 9,
  homeLogo: "/assets/images/club/kia.svg",
  awayLogo: "/assets/images/club/doosan.svg",
  inning: "7회말",
  date: "2024. 09. 19.",
  time: "18:30",
  stadium: "잠실",
  pitcherHome: "유승철",
  pitcherAway: "홍건희",
};

export const scoreboard: ScoreboardRow[] = [
  {
    team: "KIA",
    scores: [
      0,
      3,
      3,
      1,
      0,
      2,
      0,
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      9,
      10,
      0,
      4,
    ],
  },
  {
    team: "두산",
    scores: [
      2,
      0,
      0,
      1,
      0,
      0,
      1,
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      4,
      8,
      3,
      3,
    ],
  },
];
