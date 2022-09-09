import { useState } from "react";
import VideoPlayer from "../utils/VideoPlayer";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { likeThePostApiCall } from "../../controllers/screens/posts/likeThePost";
import PostComment from "./postComments";
import CommentsList from "./commentsList";
import { fetchCommentsApiCall } from "../../controllers/screens/comments/fetchComments";
import ReShareDropDown from "./reShareDropDown";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import isArabic from "../utils/isArabic";

export default function PostContent(props) {
  const router = useRouter();
  const postImageContent = props.postDetails.quoted_post?.images
    ? JSON.parse(props.postDetails.quoted_post.images[0])
    : null;
  const [quotedTextRTL, setQuotedTextRTL] = useState(
    props.postDetails.quoted_post?.description
      ? isArabic(props.postDetails.quoted_post.description)
      : false
  );
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let loggedInUserInfo = useSelector((state) => state.user.value);
  const postImage = props.postDetails.images
    ? JSON.parse(props.postDetails.images[0])
    : null;
  const [postIsLiked, setPostIsLiked] = useState(
    props.postDetails.isLiked ? props.postDetails.isLiked : false
  );
  const [heartIsAnimating, setHeartIsAnimating] = useState(false);
  props.postDetails.likesNumber;
  const [likesNumber, setLikesNumber] = useState(
    props.postDetails.likesNumber ? props.postDetails.likesNumber : null
  );
  const [sharesNumber, setSharesNumber] = useState(
    props.postDetails.sharesNumber ? props.postDetails.sharesNumber : null
  );
  const [commentsNumber, setCommentsNumber] = useState(
    props.postDetails.commentsNumber ? props.postDetails.commentsNumber : null
  );
  const [isShared, setIsShared] = useState(
    props.postDetails.isShared ? props.postDetails.isShared : false
  );
  const [showComments, setShowComments] = useState(false);
  const [textRTL, setTextRTL] = useState(
    props.postDetails.description
      ? isArabic(props.postDetails.description)
      : false
  );
  const [commentsList, setCommentsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const postId = props.postDetails.post_id;
  const fetchCommentsList = async (pageNumber) => {
    try {
      await fetchCommentsApiCall(pageNumber, postId)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setCommentsList((prevState) => [
              ...prevState,
              ...res.data.comments,
            ]);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleLoadMoreComments = () => {
    setPageNumber(pageNumber + 1);
    setIsLoading(true);
    fetchCommentsList(pageNumber + 1);
  };
  const likeThePost = async () => {
    try {
      await likeThePostApiCall(props.postDetails.post_id, postIsLiked)
        .then((res) => {
          if (res.status === 200) {
            console.log("setPostIsLiked");
          }
        })
        .catch((err) => {
          setPostIsLiked(!postIsLiked);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      setPostIsLiked(!postIsLiked);
    }
  };
  return (
    <>
      <article className="hover:bg-gray-800  transition duration-350 ease-in-out cursor-pointer">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={props.postDetails.user_picture}
                  alt=""
                />
              </div>
              <div className="ml-3 ">
                <p className="text-base leading-6 font-medium text-white">
                  {props.postDetails.user_name}
                  <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    @{props.postDetails.username} .{" "}
                    {format(props.postDetails.created_at)}
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="py-2 px-2 md:pl-16">
          <div className="px-3">
            {props.postDetails.description && (
              <p
                style={{ whiteSpace: "pre-line" }}
                className={
                  textRTL
                    ? "text-right text-base width-auto font-medium text-white flex-shrink"
                    : "text-left text-base width-auto font-medium text-white flex-shrink"
                }
              >
                <span>{props.postDetails.description}</span>
              </p>
            )}
            {postImage && (
              <div className="custom-zoom">
                <Zoom>
                  <img
                    src={postImage.optimizedImageUrl}
                    className="rounded cursor-pointer h-full w-full object-cover "
                    alt={props.postDetails.description}
                  />
                </Zoom>
              </div>
            )}
          </div>

          {props.postDetails.videos && (
            <div className="md:flex-shrink pr-0 md:pr-6 pt-3">
              <VideoPlayer src={props.postDetails.videos} />
            </div>
          )}
          {props.postDetails.quoted_post && (
            <div className=" mt-5  flex">
              <div className="w-1/12"></div>
              <article className="cursor-default border border-gray-600 rounded-md py-1 w-full hover:bg-gray-800 transition duration-350 ease-in-out cursor-pointer">
                <div className="flex flex-shrink-0 p-4 pb-0">
                  <div className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={props.postDetails.quoted_post.user_picture}
                          alt=""
                        />
                      </div>
                      <div className="ml-3 ">
                        <p className="text-base leading-6 font-medium text-white">
                          {props.postDetails.quoted_post.user_name}
                          <span className="text-sm leading-5 font-medium text-gray-400 transition ease-in-out duration-150">
                            @{props.postDetails.quoted_post.username} .{" "}
                            {format(props.postDetails.quoted_post.created_at)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-2 px-2 mb-2 md:pl-16">
                  <div className="px-3 ">
                    {props.postDetails.quoted_post.description && (
                      <p
                        className={
                          quotedTextRTL
                            ? "text-right text-base width-auto font-medium text-white flex-shrink"
                            : "text-left text-base width-auto font-medium text-white flex-shrink"
                        }
                      >
                        <span>{props.postDetails.quoted_post.description}</span>
                      </p>
                    )}
                    {postImageContent && (
                      <div className="custom-zoom">
                        <Zoom>
                          <img
                            className="rounded cursor-pointer w-full object-cover h-80 max-h-96 flex-auto"
                            src={postImageContent.optimizedImageUrl}
                            alt={props.postDetails.quoted_post.description}
                          />
                        </Zoom>
                      </div>
                    )}
                  </div>

                  {props.postDetails.videos && (
                    <div className="md:flex-shrink pr-0 md:pr-6 pt-3">
                      <VideoPlayer src={props.postDetails.quoted_post.videos} />
                    </div>
                  )}
                </div>
              </article>
            </div>
          )}

          <div className="flex items-center py-4">
            <button
              onClick={() => {
                if (showComments) {
                  setShowComments(false);
                } else {
                  setShowComments(true);
                  if (commentsList.length === 0) {
                    fetchCommentsList(1);
                  }
                }
              }}
              className={
                showComments
                  ? "flex-1 flex items-center text-white text-xs text-blue-400 transition duration-350 ease-in-out"
                  : "flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out"
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              {commentsNumber}
            </button>
            <ReShareDropDown
              isLast={props.isLast}
              postDetails={props.postDetails}
              setIsShared={setIsShared}
              isShared={isShared}
              setSharesNumber={setSharesNumber}
              sharesNumber={sharesNumber}
            />

            <div
              onClick={() => {
                console.log(isLoggedIn);
                if (!isLoggedIn) {
                  router.push("/u/login");
                } else {
                  if (!postIsLiked) {
                    setHeartIsAnimating(true);
                    setTimeout(() => {
                      setHeartIsAnimating(false);
                      setPostIsLiked(true);
                    }, 801);
                    setLikesNumber(likesNumber + 1);
                    likeThePost();
                  } else {
                    setPostIsLiked(false);
                    setLikesNumber(likesNumber - 1);
                    likeThePost();
                  }
                }
              }}
              className={
                postIsLiked
                  ? "flex-1 flex items-center text-white text-xs text-pink_color  transition duration-350 ease-in-out"
                  : "flex-1 flex items-center text-white text-xs text-gray-400 hover:text-pink_color  transition duration-350 ease-in-out"
              }
            >
              <div
                className={
                  heartIsAnimating
                    ? "heart h-6 w-16 mr-2 is_animating"
                    : postIsLiked
                    ? "heart h-6 w-16 mr-2 is-liked"
                    : "hidden "
                }
              ></div>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={
                  heartIsAnimating || postIsLiked ? "hidden" : "w-16 h-6 mr-2"
                }
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              {likesNumber}
            </div>
            <button className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <hr className="border-gray-800" />
      </article>
      {showComments && (
        <div className="flex flex-col">
          <PostComment
            setCommentsNumber={setCommentsNumber}
            postOwner={props.postDetails.username}
            commentsList={commentsList}
            setCommentsList={setCommentsList}
            postId={props.postDetails.post_id}
          />
          {commentsList && commentsList.length > 0 && (
            <CommentsList commentsList={commentsList} />
          )}
          {isLoading && (
            <div className="flex justify-center items-center h-32">
              <div className="spinner mx-auto"></div>
            </div>
          )}
          {commentsList.length >= 10 && (
            <div className="flex justify-center items-center py-2">
              <button
                onClick={() => {
                  handleLoadMoreComments();
                }}
                className="text-base text-gray-400 hover:text-blue-400  transition duration-350 ease-in-out"
              >
                Show more comments
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
