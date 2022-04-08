import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPostApiCall } from "../../controllers/screens/posts/uploadPost";
import { TextareaAutosize } from "@mui/material";
import { addPost } from "../../features/posts/posts";

export default function PostPublisher(props) {
  const dispatch= useDispatch();
  let profileImage = useSelector((state) => state.user.profile_image);
  const [showCreatePostModel, setShowCreatePostModel] = useState(false);
  const [uploadImageOrVideo, setUploadImageOrVideo] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [data, setData] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState();
  const [postVideo, setPostVideo] = useState();
  const [postImageCompressed, setPostImageCompressed] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [fileInputState, setFileInputState] = useState("");
  const onPick = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const { type } = file;
    const fileTypes = ["image/jpeg", "image/jpg", "image/png", "video/mp4"];
    if (!fileTypes.includes(type)) {
      return false;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setData(reader.result);
      if (type === "video/mp4") {
        setPostVideo(reader.result);
        setSelectedVideoUrl(URL.createObjectURL(file));
      } else {
        setPostImage(reader.result);
        console.log(type);
      }
    };
  };
  const onDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    console.log("Files: ", files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png", "video/mp4"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      return false;
    }
    compress
      .compress(files[0], {
        size: 4,
        quality: 0.75,
        maxWidth: 1920,
        maxHeight: 1920,
        resize: true,
      })
      .then((data) => {
        console.log(data);
      });
    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
      if (type === "video/mp4") {
        setPostVideo(loadEvt.target.result);
        setSelectedVideoUrl(URL.createObjectURL(files[0]));
      } else {
        setPostImage(loadEvt.target.result);
      }
    };
  };
  const uploadPost = async () => {
    setIsUploading(true);
    await uploadPostApiCall(postContent, postVideo, postImage)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.post);
          setPostContent("");
          setPostImage("");
          setPostVideo("");
          setSelectedVideoUrl(null);
          setFileInputState("");
          setUploadImageOrVideo(false);
          setData(false);
          setIsUploading(false);
          setShowCreatePostModel(false);
          dispatch(addPost(res.data.post));
          if (props.setShowModal) {
            props.setShowModal(false);
          }
        } else {
          setIsUploading(false);
          console.log(res);
        }
      })
      .catch((err) => {
        setIsUploading(false);
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
        <TextareaAutosize
            aria-label="empty textarea"
                      className=" bg-transparent text-gray-400 py-2 font-medium text-lg w-full focus:outline-none"
                      maxLength={255}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's happening?"
            dir="auto"
          />
          
          <hr className="border-gray-800 border-1" />
        </div>
      </div>
      {uploadImageOrVideo && (
        <div
          className={
            !data
              ? uploadImageOrVideo
                ? `h-30`
                : `h-30`
              : `h-110 overflow-y-scroll`
          }
        >
          {!data && (
            <div className="flex p-2 ">
              <div className="relative flex flex-col w-full h-64 border-4 justify-center border-blue-200 border-dashed  hover:border-gray-300">
                <label
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => onDrop(e)}
                  className="flex hover:bg-gray-700 flex-col items-center justify-center h-64 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1  tracking-wider text-gray-100 group-hover:text-gray-600">
                    Add Photos / Videos
                  </p>
                  <span className="text-sm text-gray-400">
                    {" "}
                    or drag and drop
                  </span>
                  <input
                    onChange={(e) => onPick(e)}
                    value={fileInputState}
                    type="file"
                    name="file"
                    className="opacity-0"
                  />
                </label>
                <div
                  onClick={() => {
                    setData(false);
                    setSelectedVideoUrl(null);
                    setUploadImageOrVideo(false);
                  }}
                  className="bg-gray-900 hover:bg-gray-600 rounded-full p-1.5 inline-block absolute top-3 right-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {data && (
            <div className="flex flex-col w-full  justify-center py-3 px-3  rounded ">
              <div className="relative h-full">
                {!selectedVideoUrl && (
                  <div className="absolute flex flex-col  items-center justify-center ">
                    <img
                      className="opacity-80 hover:opacity-100 rounded"
                      alt=""
                      src={data}
                    />
                  </div>
                )}
                {selectedVideoUrl && (
                  <div className="absolute flex flex-col  items-center justify-center ">
                    <video
                      controls
                      className="opacity-80 hover:opacity-100 rounded"
                      alt=""
                      playsInline
                      id="player"
                    >
                      <source src={selectedVideoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}
                <div
                  onClick={() => {
                    setSelectedVideoUrl(null);
                    setData(false);
                  }}
                  className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5 inline-block absolute top-3 right-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex">
        <div className="w-10"></div>

        <div className="w-64 px-2">
          <div className="flex items-center">
            <div className="flex-1 text-center px-1 py-1 m-2">
              <button
                onClick={() => setUploadImageOrVideo(true)}
                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
              >
                <svg
                  className="text-center h-7 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>

            <div className="flex-1 text-center py-2 m-2">
              <button
                onClick={() => setUploadImageOrVideo(true)}
                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
              >
                <svg
                  className="text-center h-7 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>

            <div className="flex-1 text-center py-2 m-2">
              <button className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                <svg
                  className="text-center h-7 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>

            <div className="flex-1 text-center py-2 m-2">
              <button className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                <svg
                  className="text-center h-7 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <button
            onClick={
              () => {
                if (data||postContent.length>0) {
                uploadPost()
                }
                }}
            className={
              !isUploading && (data || postContent !== "")
                ? `bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right`
                : ` bg-gray-600 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right`
            }
          >
            {!isUploading && <span>Tweet</span>}
            {isUploading && (
              <div className="flex items-center justify-center w-full h-full">
                <div className="spinner-border text-white" role="status">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-text_title"></div>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
