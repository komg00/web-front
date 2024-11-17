import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendarStyles.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BaseballCalendar() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  // 단일 날짜 또는 범위의 시작 날짜를 반환하는 함수
  const getFormattedDate = (date: Value) => {
    if (Array.isArray(date)) {
      // 배열인 경우, 시작 날짜 반환
      return date[0]
        ? moment(date[0]).format("YYYY년 MM월 DD일")
        : "날짜를 선택해 주세요.";
    } else if (date) {
      // 단일 날짜인 경우 처리
      return moment(date).format("YYYY년 MM월 DD일");
    }
    return "날짜를 선택해 주세요."; // null인 경우
  };

  return (
    <>
      <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[600px] bg-white p-10 lg:p-15 xl:p-20 shadow-md rounded-md">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          locale="ko-KR"
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
        />
      </div>
    </>
  );
}
