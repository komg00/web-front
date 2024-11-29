import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiMessageSquare, FiSend } from "react-icons/fi";
import { Post } from "types/post";
import { addComment, likePost } from "api/postApi";
import Modal from "components/layout/Modal";

interface FeedProps {
  posts: Post[];
}

export default function Feed({ posts }: FeedProps) {
  const [likePosts, setLikePosts] = useState<Post[]>(posts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentContent, setCommentContent] = useState<string>("");
  const [comments, setComments] = useState<{ content: string }[]>([]);

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

  // 댓글 등록
  const handleAddComment = async () => {
    if (!selectedPost) return;
    if (!commentContent.trim()) {
      alert("댓글 내용을 입력하세요.");
      return;
    }

    try {
      await addComment(selectedPost.postId, commentContent);
      setComments([...comments, { content: commentContent }]);
      setCommentContent("");
    } catch (error: any) {
      alert(error.message || "댓글 등록에 실패했습니다.");
    }
  };

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-10">
      {likePosts.map((post) => (
        <div
          key={post.postId}
          className="min-w-[440px] md:min-w-[520px] lg:min-w-xl xl:min-w-[700px] mx-2 md:mx-0 p-6 md:p-10 md:py-6 bg-white cursor-pointer"
          onClick={() => openModal(post)}
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
                onClick={(e) => {
                  e.stopPropagation(); // 모달 오픈 방지
                  handleLike(post.postId);
                }}
              />
              <span className="mr-2">{post.countLike}</span>
              <FiMessageSquare size={23} color="#333" />
              <span>{post.countComment}</span>
            </div>
          </div>
        </div>
      ))}

      {/* 게시글 상세 모달 */}
      {selectedPost && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="grid grid-cols-2">
            <div className="flex flex-col border-r-2 border-gray-300 my-3">
              <div className="flex items-center mb-4">
                <img
                  src={
                    selectedPost.authorProfileImage ||
                    "/assets/images/default_profile.svg"
                  }
                  alt="profile"
                  className="w-[50px] xl:w-[60px]"
                />
                <div className="ml-2 text-sm">
                  <h3 className="font-extrabold">{selectedPost.authorName}</h3>
                  <p>{selectedPost.createdDate}</p>
                </div>
              </div>
              <h2 className="font-bold text-dark1 text-xl mb-2 mx-1">
                {selectedPost.title}
              </h2>
              <p className="mb-4 mx-1">{selectedPost.content}</p>
              {selectedPost.imageUrl && (
                <img
                  src={selectedPost.imageUrl}
                  alt="sample"
                  className="w-full"
                />
              )}
              <div className="flex items-center gap-1.5 mt-5 mx-1">
                <FiThumbsUp
                  size={23}
                  color="#333"
                  onClick={() => handleLike(selectedPost.postId)}
                />
                <span>{selectedPost.countLike}</span>
                <FiMessageSquare size={23} color="#333" />
                <span>{selectedPost.countComment}</span>
              </div>
            </div>
            <div className="w-full relative flex px-2 m-3 items-start">
              <textarea
                className="w-full border rounded-md p-3"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="댓글을 입력하세요"
              />
              <FiSend
                color="#666666"
                size={20}
                onClick={handleAddComment}
                className="absolute top-3 right-4 cursor-pointer"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
