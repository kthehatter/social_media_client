import axios from "axios";
import { domainURL } from "../../utils/constants";
const authBaseURL = domainURL + "/api/web/socialmedia/follow";
export const recommendedPeopleToFollowApiCall = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const accessPoint = authBaseURL + "/recommended/tofollow";
  return await axios
    .get(accessPoint, {
      headers: {
        "Content-Type": "application/json",
        accessToken: accessToken,
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const followUserApiCall = async(username) => {
    const accessToken = localStorage.getItem("accessToken");
    const accessPoint = authBaseURL+"/follow/"+username;
            return await axios
              .post(accessPoint,{},
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