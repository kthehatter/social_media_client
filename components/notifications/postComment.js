import Link from "next/link";
export default function PostCommentNotification(props){
return(
    <div
            className="w-full pointer-events-auto flex "
          >
            <div className="flex-1 w-0 ">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={props.notificationInfo.sentNotificationInfo.user_image}
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-400">
                  {props.notificationInfo.sentNotificationInfo.user_name}
                  </p>
                  <div className="mt-1 text-sm text-gray-200">
                    <Link href={`/u/${props.notificationInfo.sentNotificationInfo.username}`}>
                        <a>
                            {props.notificationInfo.sentNotificationInfo.username} {" "}
                        </a>
                    </Link>
                    <span>
                        commented on your post {" "} {props.notificationInfo.postDescription}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
)
}