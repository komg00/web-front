import React, { useState } from "react";
import { clubs } from "data/clubs";
import { homeMenu } from "data/menu";
import { HiOutlinePhotograph } from "react-icons/hi";
import { createPost } from "api/postApi";

const categoryMapping: { [key: string]: string } = {
  "시야 정보": "VIEW",
  "관람 일지": "REVIEW",
  토론: "DISCUSSION",
  "잡담/수다": "TALK",
  "꿀팁 공유": "TIP",
  기타: "ETC",
};

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("시야 정보");
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      setError("제목과 내용을 입력해 주세요.");
      return;
    }

    try {
      const category = categoryMapping[selectedCategory];
      if (image) {
        const postData = await createPost(title, content, category, image);

        console.log(postData);
      } else {
        // If no image, create post without it
        const postData = await createPost(title, content, category);

        console.log(postData);
      }
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err: any) {
      setError(err.message || "포스트 작성에 실패했습니다.");
    }
  };

  return (
    <div className="min-w-[440px] md:min-w-[520px] lg:min-w-xl xl:min-w-[700px] mx-2 md:mx-0 my-10 p-6 md:p-10 bg-white">
      <div className="flex items-center xl:px-4">
        <img
          src="/assets/images/default_profile.svg"
          alt="profile"
          className="w-[60px] xl:w-[70px]"
        />
        <div className="flex flex-col w-full">
          <input
            className="flex-1 ml-1 lg:ml-4 p-1 md:px-3 md:py-2 border-b "
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="flex-1 ml-1 lg:ml-4 p-1 md:p-3"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      <div className="w-auto flex justify-between items-center my-4 xl:px-5 mt-8 md:mt-10">
        <div className="flex justify-center items-center">
          <label
            htmlFor="club"
            className="xl:mx-2 text-xs md:text-base xl:text-lg"
          >
            구단
          </label>
          <select
            id="club"
            className="p-2 border rounded-md text-xs md:text-base xl:text-lg"
          >
            <option>전체</option>
            {clubs.map((club) => (
              <option>{club.title}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <label
            htmlFor="category"
            className="mx-1 xl:mx-2 text-xs md:text-base xl:text-lg"
          >
            카테고리
          </label>
          <select
            id="category"
            defaultValue={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-md text-xs md:text-base xl:text-lg"
          >
            {Object.keys(categoryMapping).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="image">
            <HiOutlinePhotograph
              className="cursor-pointer size-9 md:size-10"
              color="#CCC"
            />
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-main2 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-2xl text-xs md:text-base xl:text-lg"
        >
          올리기
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
