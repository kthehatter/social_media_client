import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/posts"
export const fetchProfilePostsApiCall = async(pageNumber,username) => {
const accessPoint = authBaseURL+"/"+username+"/"+pageNumber.toString();
    return await axios
      .get(accessPoint,
        {
          headers: {
            "Content-Type": "application/json",
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