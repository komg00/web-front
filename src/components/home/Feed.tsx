import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";
import { Post } from "types/post";
import { fetchPosts, likePost } from "api/postApi";

export default function Feed() {
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
  }, []);

  // 좋아요 누르기
  const handleLike = async (postId: number) => {
    try {
      await likePost(postId);
      alert("게시글을 좋아요했습니다!");
    } catch (error: any) {
      alert(error.message || "Failed to like post");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <div
          key={post.postId}
          className="min-w-[440px] md:min-w-[520px] lg:min-w-xl xl:min-w-[700px] mx-2 md:mx-0 p-6 md:p-10 md:py-6 bg-white"
        >
          <div className="flex items-center xl:px-4 mt-2">
            <img
              src={
                post.authorProfileImage
                  ? post.authorProfileImage
                  : "/assets/images/default_profile.svg"
              }
              alt="profile"
              className="w-[60px] xl:w-[70px]"
            />

            <div className="flex flex-col ml-1 md:ml-4 text-dark1">
              <p className="font-extrabold">{post.authorName}</p>
              <p>{post.createdDate}</p>
            </div>
          </div>
          <div className="px-2 py-1 md:px-2.5 xl:px-6">
            <p className="my-2 text-dark1">{post.content}</p>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="sample" className="w-80 h-80" />
            )}
            <div className="flex items-center gap-1.5 mt-5">
              <FiThumbsUp
                size={23}
                color="#333"
                onClick={() => handleLike(post.postId)}
              />
              <span className="mr-2">{post.countLike}</span>
              <FiMessageSquare size={23} color="#333" />
              <span>{post.countComment}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
