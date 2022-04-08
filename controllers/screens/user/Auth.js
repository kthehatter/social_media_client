// create the service that handle the request to the server for authentication

import axios from 'axios';
import {domainURL} from "../../utils/constants"; 
console.log(domainURL);
const authBaseURL = domainURL + "/api/authentication/"
export const userLoginApiCall = async (body) => {
  const accessPoint = authBaseURL+"user/login";
  return await axios
    .post(accessPoint, body)
    .then((res) => {
      console.log("res",res);
      return res;
    })
};
export const userRegisterApiCall = async (body) => {
  const accessPoint = authBaseURL + "user/register";
  return await axios
    .post(accessPoint, body, {
      headers: {
        "Content-Type": "application/json",
        },
        })
    .then((res) => {
      console.log("res", res);
      return res;
    })
};

export const userTokenValidationApiCall = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const accessPoint = authBaseURL+"user/verify";
  return await axios
    .post(accessPoint, { },{headers:{
      "Content-Type": "application/json",
      accessToken: accessToken
    }})
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export const getUsersApiCall = async (accessToken) => {
  const accessPoint = authBaseURL+"user/list";
  return await axios
  .get(
    accessPoint,
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