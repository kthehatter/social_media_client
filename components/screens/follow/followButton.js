import { useState } from "react";
import { followUserApiCall } from "../../../controllers/screens/user/follow";

export default function FollowButton({username,UserIsFollowed}) {
    const [isFollowed, setIsFollowed] = useState(UserIsFollowed?true:false);
    const followUser = async() => {
        try {
            await followUserApiCall(username).then((res) => {
                if (res.status === 200) {
                    setIsFollowed(true);
                }else{
                    setIsFollowed(false);
                }

            }).catch((err) => {
                console.log(err);
            });
            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="flex-1 px-4 py-2 m-2">
                    <div className=" float-right">
                      {!isFollowed&&<button 
                      onClick={()=>{
                          followUser();
                          setIsFollowed(true);
                      }}
                       className="bg-transparent hover:bg-light_blue_logo text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                        Follow
                      </button>}
                      {isFollowed&&<button 
                      onClick={()=>{
                          //unfollowUser();
                          setIsFollowed(true);
                      }}
                       className="group  bg-light_blue_logo hover:bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white rounded-full">
                        <span className="group-hover:hidden" >Following</span>
                        <span className="hidden group-hover:block" >Unfollow</span>

                      </button>}
                    </div>
                  </div>
    )
}