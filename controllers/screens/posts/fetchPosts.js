import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/posts"
export const fetchPostsApiCall = async(pageNumber) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/"+pageNumber.toString();
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