import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/posts"
export const quotePostApiCall = async(quotedPostId,postContent,postVideo,postImage) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/quote";
    const body = {quotedPostId,postContent,postImage,postVideo,};
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