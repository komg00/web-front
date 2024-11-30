import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendarStyles.css";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "store/slices/calendarSlice";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BaseballCalendar() {
  const dispatch = useDispatch();
  const [selectedDate, setLocalSelectedDate] = useState<Value>(new Date());

  const handleDateChange = (date: Value) => {
    setLocalSelectedDate(date);
    const formattedDate = Array.isArray(date)
      ? date[0]
        ? moment(date[0]).toISOString()
        : null
      : date
      ? moment(date).toISOString()
      : null;
    dispatch(setSelectedDate(formattedDate));
  };

  console.log("selectedDate: ", selectedDate);

  return (
    <div className="py-8 sm:py-12 lg:py-20 lg:pl-3 xl:pl-10">
      <div className="w-auto md:w-[450px] lg:w-[360px] xl:w-[460px] mx-5 lg:mx-0 lg:mr-4 bg-white py-10 px-4 xl:px-8 xl:py-20 shadow border">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="ko-KR"
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
        />
      </div>
    </div>
  );
}
