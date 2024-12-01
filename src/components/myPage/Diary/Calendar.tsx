import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../styles/calendarStyles.css";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "store/slices/calendarSlice";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
type BaseballCalendarProps = {
  matchDates: string[];
};

export default function BaseballCalendar({
  matchDates,
}: BaseballCalendarProps) {
  const dispatch = useDispatch();
  const [selectedDate, setLocalSelectedDate] = useState<Value>(new Date());

  const handleDateChange = (date: Value) => {
    setLocalSelectedDate(date);
    const formattedDate = Array.isArray(date)
      ? date[0]
        ? moment(date[0]).format("YYYY-MM-DD")
        : null
      : date
      ? moment(date).format("YYYY-MM-DD")
      : null;
    dispatch(setSelectedDate(formattedDate));
  };

  return (
    <div className="py-8 sm:py-12 lg:py-20 lg:pl-3 xl:pl-10">
      <div className="w-auto md:w-[450px] lg:w-[360px] xl:w-[460px] lg:min-h-[610px] mx-5 lg:mx-0 lg:mr-4 bg-white py-10 px-4 xl:px-8 xl:py-20 shadow border">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="ko-KR"
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          maxDate={new Date()}
          tileContent={({ date, view }) => {
            const isMarked = matchDates.includes(
              moment(date).format("YYYY-MM-DD")
            );
            return (
              isMarked &&
              view === "month" && (
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="icon"></div>
                </div>
              )
            );
          }}
        />
      </div>
    </div>
  );
}
