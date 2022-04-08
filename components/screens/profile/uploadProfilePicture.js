import { useState } from "react";

export default function UploadProfilePicture(props) {
    const [profile_picture, setProfile_picture] = useState(props.profile_picture);
  const [fileInputState, setFileInputState] = useState("");

    const onPick = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const { type } = file;
        const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!fileTypes.includes(type)) {
          return false;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            props.setProfile_picture(reader.result);
            props.setProfilePicChanged(true);
            setProfile_picture(reader.result);
        };
      };
    return(
      <div className="px-4 relative flex w-full">
          <div className="flex flex-1">
            <div className="relative -mt-20">
              <div
                className="md w-30 h-30 rounded-full relative avatar"
              >
                <img
                  className="md w-36 h-36 rounded-full relative border-4 border-gray-900"
                  src={profile_picture}
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="absolute -translate-y-1/2	 top-1/2 left-1/2">
        <div className=" relative -left-1/2 ">
            <label
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => onPick(e)}
                  className="bg-transparent border-0 text-black bg-black/50 p-2 rounded-full cursor-pointer float-right"
                >
          
              <svg className="h-6 w-6 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />  <circle cx="12" cy="13" r="4" /></svg>
              <input
                    onChange={(e) => onPick(e)}
                    value={fileInputState}
                    type="file"
                    name="file"
                    className="hidden"
                  />
            </label>
            <div className="px-4">
            </div>
            </div>
        </div>
            </div>
          </div>
        </div>
        
        )
}