import React from "react";
import BaseballCalendar from "./Calendar";
import DiaryDetails from "./DiaryDetails";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { diaryList } from "data/dummy/diary";

export default function Diary() {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const filteredDiary = diaryList.find(
    (diary) =>
      diary.match_date === selectedDate?.split("T")[0]?.replace(/-/g, ". ")
  );

  const filterdata = selectedDate?.split("T")[0]?.replace(/-/g, ". ");
  console.log(selectedDate);
  console.log(filterdata);
  return (
    <div className="flex flex-col lg:flex-row">
      <BaseballCalendar />
      {filteredDiary ? (
        <DiaryDetails key={filteredDiary.record_id} diary={filteredDiary} />
      ) : (
        <div className="w-auto md:w-[450px] lg:w-auto xl:w-full xl:max-w-[660px] lg:flex-1 mx-5 my-2 md:m-0 xl:mx-4 p-10 text-xl font-semibold text-dark2 bg-white shadow border">
          관람일지를 작성해 주세요!
        </div>
      )}
    </div>
  );
}
