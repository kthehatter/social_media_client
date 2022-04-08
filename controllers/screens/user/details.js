import axios from "axios";
import {domainURL} from "../../utils/constants"; 
const authBaseURL = domainURL+"/api/web/socialmedia/profiles";
export const fetchUserDetailsApiCall = async(username) => {
    const accessPoint = authBaseURL+"/details/"+username;
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
      export const updateUserDetailsApiCall = async(body) => {
    const accessToken = localStorage.getItem("accessToken");
    const accessPoint = authBaseURL+"/details/update";
            return await axios
              .post(accessPoint,body,
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