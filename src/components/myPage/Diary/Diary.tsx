import React from "react";
import BaseballCalendar from "./Calendar";
import DiaryDetails from "./DiaryDetails";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { diaryList } from "data/dummy/diary";
import WriteDiary from "./WriteDiary";

export default function Diary() {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const filteredDiary = diaryList.find(
    (diary) => diary.match_date === selectedDate
  );
  console.log(selectedDate);

  return (
    <div className="flex flex-col lg:flex-row">
      <BaseballCalendar />
      {filteredDiary ? (
        <DiaryDetails key={filteredDiary.record_id} diary={filteredDiary} />
      ) : (
        <WriteDiary />
      )}
    </div>
  );
}
