interface Word {
  index: number;
  term: string;
  meaning: string;
}

export const words: Word[] = [
  {
    index: 1,
    term: "아웃",
    meaning:
      "야구에서 경기 중에 타자나 주자가 타격이나 주루 자격을 잃는 것. 자격을 잃은 선수는 덕아웃으로 들어가야 한다. 한 이닝에 3개의 아웃 카운트를 잡아야만 공수 교대가 이루어지며 야구는 일반적으로 9이닝 동안 플레이하기 때문에 27개의 아웃 카운트를 잡아야만 경기를 끝낼 수 있다.",
  },
  {
    index: 2,
    term: "낫아웃",
    meaning:
      "야구에서 투수가 던진 세 번째 스트라이크를 포수가 받지 못하여 삼진 아웃이 되지 않는 경우를 말한다. 정식 용어로는 스트라이크아웃낫아웃(STRIKE OUT NOT OUT)이라고 한다.",
  },
];
