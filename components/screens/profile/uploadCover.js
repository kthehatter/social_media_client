import { useState } from "react";

export default function UploadProfileCover(props) {
    const [profile_cover, setProfile_cover] = useState(props.profile_cover);
  const [fileInputState, setFileInputState] = useState("");
  const removeProfileCover = () => {
        setProfile_cover('https://res.cloudinary.com/khalilay/image/upload/v1648390148/Social%20media/g/default-cover_acz4hs.gif');
    };
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
            props.setProfile_cover(reader.result);
            props.setProfileCoverChanged(true);
          setProfile_cover(reader.result);
        };
      };
    return(
        <div className="relative">
       
        <div
        className=" w-full h-60 bg-cover bg-no-repeat bg-center bg-black opacity-50"
        style={{ backgroundImage: `url(${profile_cover})` }}
      >
        <img
          className="opacity-0 w-full h-full "
          src={profile_cover}
          alt="cover"
        />
      </div>
      <div className="absolute -translate-y-1/2	 top-1/2 left-1/2">
        <div className=" relative -left-1/2 ">
            <button
                className="bg-transparent border-0 text-black bg-black/50 p-2 mx-4 rounded-full float-right"
                onClick={() => removeProfileCover()}
                >
                <svg className="h-6 w-6 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>

            </button>
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
        )
}