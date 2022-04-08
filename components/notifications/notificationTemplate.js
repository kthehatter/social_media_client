
import Link from "next/link";
import { handleNotificationClickApiCall } from "../../controllers/screens/user/notifications";
import {useRouter} from "next/router";
export default function NotificationTemplate(props) {
    const router = useRouter();
    console.log(props.notificationDetails);
    const handleNotificationClick =async(id)=>{
        try{
            await handleNotificationClickApiCall(id).then(() => {
                router.push(props.notificationDetails.url);
            }).catch((err) => {
                router.push(props.notificationDetails.url);
                console.log(err);
            })
        }catch(err){
                router.push(props.notificationDetails.url);
                console.log(err);

        }
    }
    return(
    <div className="relative rounded-xl overflow-auto p-4">
                <span className="relative inline-flex w-full" >
                  <button
                  onClick={() =>{
                      handleNotificationClick(props.notificationDetails);
                  }}
                    type="button"
                    className="bg-gray-800 shadow-lg rounded-sm w-full px-4 py-2 font-semibold leading-6 text-sm shadow transition ease-in-out duration-150 cursor-pointer "
                    disabled=""
                  >
                    <div className="flex justify-left px-2 py-3">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={props.notificationDetails.sender_picture}
                  />
                  <div className="mx-3">
                  <Link href={`/u/${props.notificationDetails.sender_username}`}>
                  <a className="flex justify-left">
                  <span className="text-xl text-left font-semibold text-gray-300">{props.notificationDetails.sender_username}</span>
                    </a>
                  </Link>
                    
                    <p className="text-gray-100">
                      has replied to your post {" "}
                      <a href="#" className="text-blue-500">
                      {props.notificationDetails.content}
                      </a>
                      .
                    </p>
                  </div>
                </div>
                  </button>
                  {!props.showAll&&<span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>}
                </span>
            </div>
)}