import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/notifications";
export const fetchAllNotificationsApiCall = async(offset) => {
const accessToken = localStorage.getItem("accessToken");
const accessPoint = authBaseURL+"/all/"+offset.toString();
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
  export const fetchUnreadNotificationsApiCall = async(offset) => {
    const accessToken = localStorage.getItem("accessToken");
    const accessPoint = authBaseURL+"/unread/"+offset.toString();
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

      export const handleNotificationClickApiCall = async (notificationsId) => {
        const accessPoint = authBaseURL + "/unread/" + notificationsId;
        return await axios
          .post(accessPoint, {}, {
            headers: {
              "Content-Type": "application/json",
              },
              })
          .then((res) => {
            console.log("res", res);
            return res;
          })
      };