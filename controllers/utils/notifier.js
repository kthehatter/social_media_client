import { toast } from "react-toastify";
import PostCommentNotification from "../../components/notifications/postComment";
export default function Notify(notificationInfo) {
    const Msg = () => (
        <div
    className=""
  >
    {(() => {
        switch (notificationInfo.type) {
          case 'start':
            return <PostCommentNotification notificationInfo={notificationInfo} />
          default:
            return <PostCommentNotification notificationInfo={notificationInfo} />
        }
      })()}
  </div>
        
        
      );
    toast(<Msg />, {
        onClick: () => {
            console.log("clicked");
            window.location.href ="/";
        },
        position: "bottom-left",
        style: {
            width: "400px",
            backgroundColor: "#1F2937",
        },
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        });
        return null;
}