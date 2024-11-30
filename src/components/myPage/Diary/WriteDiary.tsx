import React, { useState } from "react";
import { Diary } from "data/dummy/diary";
import {
  HiCheck,
  HiOutlineReply,
  HiOutlinePencilAlt,
  HiX,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const WriteDiary: React.FC = () => {
  const matchDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const [formData, setFormData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [place, setPlace] = useState("");
  const [seat, setSeat] = useState("");
  const [team1, setTeam1] = useState("");
  const [team1Score, setTeam1Score] = useState("");
  const [team2, setTeam2] = useState("");
  const [team2Score, setTeam2Score] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="w-auto md:w-[450px] lg:w-auto xl:w-full xl:max-w-[660px] lg:flex-1 mx-5 lg:ml-0 lg:my-20 p-6 sm:p-10 xl:py-10 xl:px-13 bg-white shadow border flex flex-col gap-y-2">
      {/* Match Date */}
      <div className="flex justify-between items-center my-5 mb-10">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-dark2 hover:text-dark1"
        >
          <HiX className="size-6 xl:size-8" />
        </button>
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">
          {matchDate}
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-dark2 hover:text-dark1"
        >
          <HiCheck className="size-7 xl:size-9" />
        </button>
      </div>

      {/* Match Place */}
      <div className="flex flex-col xl:flex-row gap-y-2 mb-4 xl:items-center">
        <label className="w-12 block font-semibold text-dark1 text-lg xl:text-xl xl:mr-2">
          장소
        </label>
        <input
          type="text"
          name="match_place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="w-full px-2 py-1.5 xl:px-3 xl:py-2 border rounded-md text-lg xl:text-xl"
        />
      </div>

      {/* Seat */}
      <div className="flex flex-col xl:flex-row gap-y-2 mb-4 xl:items-center">
        <label className="w-12 block font-semibold text-dark1 text-lg xl:text-xl xl:mr-2">
          자리
        </label>
        <input
          type="text"
          name="seat"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
          className="w-full px-2 py-1.5 xl:px-3 xl:py-2 border rounded-md text-lg xl:text-xl"
        />
      </div>

      {/* Match Score */}
      <div className="flex flex-col xl:flex-row mb-2 xl:mb-4 xl:items-center ">
        <label className="w-15 block font-semibold text-dark1 text-lg xl:text-xl mr-3">
          스코어
        </label>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-3">
            <img src={""} alt="team 1" className="w-10 h-10 xl:w-12 xl:h-12" />
            <input
              type="text"
              name="team1_score1"
              value={team1Score}
              onChange={(e) => setTeam1Score(e.target.value)}
              className="w-14 xl:w-16 py-1 px-2 xl:px-3 xl:py-2 border rounded-md font-semibold text-xl xl:text-2xl"
            />
            <span className="font-semibold text-xl xl:text-2xl">
              {team2Score}
            </span>
          </div>
          <span className="text-xl xl:text-2xl font-bold">:</span>
          <div className="flex items-center gap-2">
            <img src={""} alt="team 2" className="w-10 h-10 xl:w-12 xl:h-12" />
            <input
              type="text"
              name="team2_score"
              value={team2Score}
              onChange={(e) => setTeam2Score(e.target.value)}
              className="w-14 xl:w-16 py-1 px-2 xl:px-3 xl:py-2 border rounded-md font-semibold text-xl xl:text-2xl"
            />
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="mb-2 xl:mb-4">
        <textarea
          name="match_details"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-28 xl:h-40 p-3 xl:py-7 xl:px-5 text-lg xl:text-xl text-dark1 border rounded-lg"
          rows={3}
        />
      </div>

      {/* Photo (optional) */}
    </div>
  );
};

export default WriteDiary;
