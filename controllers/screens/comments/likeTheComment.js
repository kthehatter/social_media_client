import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/comments"
export const likeTheCommentApiCall = async(commentId,commentIsLiked) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/react";
    const body = {commentId,commentIsLiked};
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