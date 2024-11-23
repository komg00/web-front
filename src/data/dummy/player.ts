interface Player {
  index: number;
  name: string;
  team: string;
  logo_path: string;
  image_path: string;
  position: string;
  birth_date: string;
  physique: string;
  avg: number;
  ab: number;
  hr: number;
}

export const players: Player[] = [
  {
    index: 1,
    name: "김도영",
    team: "KIA",
    logo_path: "/assets/images/club/kia.svg",
    image_path: "/assets/images/players/image1.svg",
    position: "내야수",
    birth_date: "2003-10-02",
    physique: "183 / 85",
    avg: 0.347,
    ab: 544,
    hr: 38,
  },
  {
    index: 2,
    name: "양현종",
    team: "KIA",
    logo_path: "/assets/images/club/kia.svg",
    image_path: "/assets/images/players/image2.svg",
    position: "투수",
    birth_date: "1988-03-01",
    physique: "183 / 91",
    avg: 4.1,
    ab: 0,
    hr: 0.688,
  },
  {
    index: 3,
    name: "윤도현",
    team: "KIA",
    logo_path: "/assets/images/club/kia.svg",
    image_path: "/assets/images/players/image3.svg",
    position: "내야수",
    birth_date: "2003-05-07",
    physique: "181 / 84",
    avg: 0.407,
    ab: 27,
    hr: 1,
  },
];
