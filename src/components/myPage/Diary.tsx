import React from "react";
import BaseballCalendar from "./Calendar";
import DiaryDetails from "./DiaryDetails";
import { diaryList } from "data/dummy/diary";

export default function Diary() {
  return (
    <div className="flex flex-col lg:flex-row">
      <BaseballCalendar />
      {diaryList.map((diary) => (
        <DiaryDetails key={diary.record_id} diary={diary} />
      ))}
    </div>
  );
}
