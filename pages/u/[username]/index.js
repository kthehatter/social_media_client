import BottomNavigationBar from "../../../components/screens/bottomNavigationBar";
import LeftSideBar from "../../../components/screens/leftSideBar";
import RightSideBar from "../../../components/screens/rightSideBar";
import UserCard from "../../../components/screens/userCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchUserDetailsApiCall } from "../../../controllers/screens/user/details";
import { useSelector,useDispatch } from "react-redux";
import { addUserPosts } from "../../../features/user/user";
import { useState,useEffect } from "react";
import { setProfileInfo } from "../../../features/profiles/profile";
import ProfilePostsList from "../../../components/screens/profilePostsList";

export default function UserProfile() {
  const router = useRouter();
  const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.value);
    const profileInfo = useSelector((state) => state.profile.value);
    const username = router.query.username;
    console.log("username",username);
    const fetchUserDetails = async () => {
      if (!username||profileInfo.username === username) {
        return;
      }
    try {
      await fetchUserDetailsApiCall(username)
        .then((res) => {
              if (res.status === 200) {
                dispatch(setProfileInfo(res.data.profile));
            }else{
          router.push("/404");

            }
        })
        .catch((err) => {
            console.log(err.response);
          router.push("/404");
        });
    } catch (err) {
      console.log(err);
      router.push("/404");
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, [username]);
  return (
    <div className="relative bg-dark_one">
      <div className=" flex justify-center   w-full">
        <LeftSideBar page="profile" />

        <div className="relative w-full  lg:w-3/4 xl:w-3/6">
          <div className="sticky top-0 z-50">
            <div className="  bg-dark_one backdrop-brightness-50 py-2 flex justify-start">
              <div className="px-4 py-2 mx-2">
                <Link href="/">
                  <a className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                    <svg
                      className="m-2 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                      </g>
                    </svg>
                  </a>
                </Link>
              </div>
              {profileInfo.username!==""&&<div className="mx-2">
                <h2 className="mb-0 text-xl font-bold text-white">
                {profileInfo.first_name + " " +profileInfo.last_name}
                </h2>
                <p className="mb-0 w-48 text-xs text-gray-400">{profileInfo.postsNumber} Posts</p>
              </div>}
            </div>
          </div>

          <hr className="border-gray-800" />
          <UserCard profileInfo={profileInfo} userInfo={userInfo}/>
          <hr className="border-gray-800 border-4" />

          {/* <UserPostsList /> */}
          { profileInfo.username!==""&&<ProfilePostsList username={profileInfo.username}/>}
        </div>

        <RightSideBar />
      </div>
      {/* bottom sheet */}
      <div className="md:hidden absolute w-full  bottom-0 z-50 bg-dark_one backdrop-brightness-50 ">
        <BottomNavigationBar />
      </div>

      {/* <div className="absolute bottom-0 h-20 w-full bg-dark_three sm:flex sm:items-center sm:justify-center">
        
      </div> */}
    </div>
  );
}
