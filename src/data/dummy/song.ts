interface Song {
  index: number;
  title: string;
  description: string;
  lyrics?: string;
}

export const songs: Song[] = [
  {
    index: 1,
    title: "WANTED",
    description: "미치도록 사랑해요",
    lyrics: `워워워어~ 워워워어~
워워워어~ 워워워어~
워워워어~ 워워워워워어~
워워어~ 워워어~

승리하라 최강기아
열광하라 타이거즈
우리들의 함성을 모아서
외쳐라 워워어~

외쳐라! 최강기아
워워워어~ 워어~ 워어~
타이거즈 승리를 위하여
...`,
  },
  {
    index: 2,
    title: "견제응원",
    description: "날 새겼다",
    lyrics: "",
  },
  {
    index: 3,
    title: "공통 안타송 1",
    description: "안타 홈런 날려버려라",
    lyrics: "",
  },
  {
    index: 4,
    title: "공통 안타송 2",
    description: "오른쪽 왼쪽 OOO OOO",
    lyrics: "",
  },
];
