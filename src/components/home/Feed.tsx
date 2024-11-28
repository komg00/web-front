import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";
import { Post } from "types/post";
import { likePost } from "api/postApi";

interface FeedProps {
  posts: Post[];
}

export default function Feed({ posts }: FeedProps) {
  const [likePosts, setLikePosts] = useState<Post[]>(posts);

  useEffect(() => {
    setLikePosts(posts);
  }, [posts]);

  // 좋아요 누르기
  const handleLike = async (postId: number) => {
    try {
      const responseData = await likePost(postId);
      alert("게시글 좋아요에 성공하였습니다.");
      setLikePosts((prevPosts) =>
        prevPosts.map((post) =>
          post.postId === postId
            ? {
                ...post,
                countLike: responseData.data.likeCount, // 서버에서 반환된 좋아요 수로 업데이트
              }
            : post
        )
      );
    } catch (error: any) {
      alert(error.message || "Failed to like post");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {likePosts.map((post) => (
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
            <h2 className="font-bold text-dark1 text-lg">{post.title}</h2>
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
