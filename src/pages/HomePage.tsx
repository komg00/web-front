import React, { useEffect, useState } from "react";
import Sidebar from "components/layout/Sidebar";
import { homeMenu } from "data/menu";
import ClubPicker from "components/layout/ClubPicker";
import WritePost from "components/home/WritePost";
import Feed from "components/home/Feed";
import { fetchPosts } from "api/postApi";
import { Post } from "types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts("VIEW", 2); // category와 pageSize 전달
        setPosts(data);
        console.log(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [posts]);

  // 새 포스트가 작성되면 Feed에 추가
  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={homeMenu} />
      <div className="flex-1">
        <ClubPicker />
        <main className="w-full flex flex-col justify-center items-center mb-12">
          <WritePost addPost={addPost} />
          <Feed posts={posts} />
        </main>
      </div>
    </div>
  );
}
