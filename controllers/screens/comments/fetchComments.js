import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/comments"
export const fetchCommentsApiCall = async(pageNumber,postId) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/"+postId.toString()+"/"+pageNumber.toString();
    return await axios
      .get(accessPoint,
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