import React, { useState } from "react";
import { songs } from "data/dummy/song";
import { FaX, FaPlay } from "react-icons/fa6";
interface SongModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics?: string;
}

const SongModal: React.FC<SongModalProps> = ({
  isOpen,
  onClose,
  title,
  lyrics,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
        <button
          className="absolute top-5 right-5 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FaX />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

        <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-center">
          <p className="whitespace-pre-wrap">{lyrics}</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-6 gap-4">
          <div className="w-full bg-gray-300 rounded-full h-3 flex-grow mx-4 relative">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <button className="bg-main2 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600">
            <FaPlay className="ml-px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Song() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<{
    title: string;
    lyrics?: string;
  } | null>(null);

  const openModal = (title: string, lyrics: string) => {
    setSelectedSong({ title, lyrics });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSong(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1">
      <div className="w-full h-32 sm:h-48 xl:h-64 bg-dark2 flex flex-row text-white items-baseline justify-between px-7 sm:px-16 xl:px-24">
        <h1 className="font-bold text-3xl sm:text-4xl xl:text-5xl mt-16 sm:mt-28 xl:mt-40">
          KIA TIGERS
        </h1>
        <p className="sm:text-lg xl:text-2xl">구단 바꾸기</p>
      </div>
      <div className="flex flex-col gap-7 xl:gap-9 p-7 sm:p-12 xl:px-36 xl:pt-16">
        <div className="flex text-base xl:text-xl font-bold text-center">
          <div className="w-20 xl:w-24 rounded-xl bg-dark1 p-2 text-white mr-3">
            팀
          </div>
          <div className="w-20 xl:w-24 rounded-xl bg-light2 p-2">선수</div>
        </div>
        <p className="text-dark4 border-b-2 pb-3 text-lg xl:text-xl">총 34곡</p>
        {songs.map((item, index) => (
          <div key={index} className="flex">
            <div className="bg-kia rounded-3xl size-16 xl:size-20 flex items-center justify-center ml-0 sm:ml-2 mr-3 xl:mr-5">
              <p className=" text-white font-bold text-xl xl:text-2xl">KIA</p>
            </div>
            <div
              className="flex flex-col justify-center gap-y-1 cursor-pointer"
              onClick={() =>
                openModal(item.title, item.lyrics ?? "가사가 없습니다.")
              }
            >
              <h1 className="text-xl xl:text-2xl font-bold">{item.title}</h1>
              <p className="p-0 text-lg xl:text-xl text-gray text-dark4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Song Modal */}
      {selectedSong && (
        <SongModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedSong.title}
          lyrics={selectedSong.lyrics}
        />
      )}
    </div>
  );
}
