import React from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";

type PostItem = {
  post_id: number;
  contents: string;
  username: string;
  profile_image_path: string;
  date: string;
  created_at: string;
  like_count: number;
  comment_count: number;
};

type Props = {
  posts: PostItem[];
};

export default function Post({ posts }: Props) {
  return (
    <div className="w-full grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2 mt-4">
      {posts.map((post) => (
        <div className="w-full p-8 xl:p-10 bg-white ">
          <div className="flex items-center mt-2">
            <img
              src={post.profile_image_path}
              alt="profile"
              className="w-[60px] xl:w-[70px]"
            />
            <div className="flex flex-col ml-1 md:ml-2 text-dark1">
              <p className="text-lg lg:text-[24px] font-bold">
                {post.username}
              </p>
              <p className="text-lg text-dark2 ">
                {post.date} <span>{post.created_at}</span>
              </p>
            </div>
          </div>
          <p className="my-2 lg:my-4 text-lg lg:text-xl text-dark1">
            {post.contents}
          </p>

          <div className="flex items-center gap-1.5 mt-5">
            <FiThumbsUp size={23} color="#333" />
            <span className="mr-2">3</span>
            <FiMessageSquare size={23} color="#333" />
            <span>3</span>
          </div>
        </div>
      ))}
    </div>
  );
}
