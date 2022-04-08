import { useContext } from "react";
import { SocketContext } from "../../../controllers/utils/socketContext";

export default function ReceivingCallModal(props) {
 const {ringtone,answerCall,setCallAccepted,setIsReceivingCall} = useContext(SocketContext);
    const handleRefuseCall= async () => {
        setIsReceivingCall(false);
        ringtone?.pause();
    }
    const handleAnswerCall= async () => {
      console.log('call accepted');
        await answerCall();
        setIsReceivingCall(false);
        ringtone?.pause();
    }
     
    return(
    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src={props.callerInfo?.callerPicture}
                alt={props.callerInfo?.callerUsername}
              />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">{props.callerInfo?.callerUsername}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{props.callerInfo?.callerName} is calling you , answer his call.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-3 flex justify-center ">
      
        <button onClick={()=>{
            handleRefuseCall()

        }} type="button" className="mt-3 mx-4 w-full inline-flex justify-center rounded-full shadow-sm px-4 py-4 bg-red-500 text-base font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm">
        
        
        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />  <line x1="23" y1="1" x2="1" y2="23" /></svg>
        </button>
        <button onClick={()=>{
          handleAnswerCall()

        }} className="mt-3 mx-4 w-full inline-flex justify-center rounded-full shadow-sm px-4 py-4 bg-green-500 text-base font-medium  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
        </button>
        
      </div>
    </div>
  </div>
</div>
)
    }