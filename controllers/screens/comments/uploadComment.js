import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/comments"
export const uploadCommentApiCall = async(postId,commentContent,commentVideo,commentImage) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/upload";
    const body = {postId,commentContent,commentImage,commentVideo,};
      return await axios
      .post(accessPoint, body,
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: accessToken,
          },
        }
        )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }