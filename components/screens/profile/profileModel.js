import { useState } from "react";
import UploadProfileCover from "./uploadCover";
import UploadProfilePicture from "./uploadProfilePicture";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import { updateUserDetailsApiCall } from "../../../controllers/screens/user/details";
import { useDispatch } from "react-redux";
import { setProfileInfo } from "../../../features/profiles/profile";

export default function ProfileModal(props) {
  console.log("profileInfo",props.profileInfo);
  const dispatch= useDispatch();
  const datetime = new Date();
  const [birthDate, setBirthDate] = useState(props.profileInfo.profile_birthday?props.profileInfo.profile_birthday:datetime);
  const [username, setUsername] = useState(props.profileInfo.username);
  const [firstName, setFirstName] = useState(props.profileInfo.first_name);
  const [lastName, setLastName] = useState(props.profileInfo.last_name);
  const [bio,setBio] = useState(props.profileInfo.profile_bio);
  const [location,setLocation] = useState(props.profileInfo.profile_location);
  const [website, setWebsite] = useState(props.profileInfo.profile_website);
  const [isUploading, setIsUploading] = useState(false);
  const [profilePicChanged, setProfilePicChanged] = useState(false);
  const [profileCoverChanged, setProfileCoverChanged] = useState(false);
  const [profile_cover, setProfile_cover] = useState(
    props.profileInfo.profile_cover
      ? props.profileInfo.profile_cover
      : "https://res.cloudinary.com/khalilay/image/upload/v1648390148/Social%20media/g/default-cover_acz4hs.gif"
  );
  const [profile_picture, setProfile_picture] = useState(
    props.profileInfo.profile_picture
      ? props.profileInfo.profile_picture
      : "https://res.cloudinary.com/khalilay/image/upload/v1647365570/Social%20media/g/640px-Unknown_person_h810y8.jpg"
  );
  const saveProfileInfo = async() => {
    setIsUploading(true);
    let changed_profile_picture;
    let changed_profile_cover;
    if (profilePicChanged) {
      changed_profile_picture=profile_picture;
    }
    if (profileCoverChanged) {
      changed_profile_cover=profile_cover;
    }

    const body = {firstName,lastName,username,birthDate,bio,location,website,changed_profile_cover,changed_profile_picture};
    try {
      await updateUserDetailsApiCall(body).then(res => {
        if (res.status === 200) {
          setIsUploading(false);
          dispatch(setProfileInfo({
            username:props.profileInfo.username,
            created_at:props.profileInfo.created_at,
            postsNumber:props.profileInfo.postsNumber,
            first_name:firstName,
            last_name:lastName,
            profile_birthday: birthDate,
            profile_bio: bio,
            profile_location: location,
            profile_website: website,
            profile_cover: res.data.profile_cover?res.data.profile_cover:profile_cover,
            profile_picture: res.data.profile_picture?res.data.profile_picture:profile_picture
          }));
          props.setShowModal(false);
        }else{
          setIsUploading(false);
        }
      }).catch(err => {
        setIsUploading(false);
        console.log(err);

      });
    } catch (error) {
      setIsUploading(false);
      console.log(error);
    }

  };
  return (
    <>
      <div className="cursor-default flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-full md:max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark_blue_logo outline-none focus:outline-none">
            <div className="flex items-start justify-between pt-4 px-4 rounded-t ">
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => props.setShowModal(false)}
              >
                <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 rounded-full">
                  x
                </span>
              </button>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => saveProfileInfo()}
              >
                {!isUploading&&<span className="text-black font-semibold opacity-7  text-lg px-4 block bg-gray-400 rounded-full">
                  Save
                </span>}
                {isUploading && (
              <div className="flex items-center justify-center w-full h-full">
                <div className="spinner-border text-white" role="status">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-text_title"></div>
                </div>
              </div>
            )}
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <UploadProfileCover
              setProfileCoverChanged={setProfileCoverChanged}
                setProfile_cover={setProfile_cover}
                profile_cover={profile_cover}
              />
              <UploadProfilePicture
              setProfilePicChanged={setProfilePicChanged}
                setProfile_picture={setProfile_picture}
                profile_picture={profile_picture}
              />
            </div>
            <div className="px-5 pb-5">
            <div className="flex">
                <div className="flex-grow w-1/4 pr-2">
                  <label className="block text-gray-400 font-bold mb-2">
                  First Name
                  </label>
                  <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}

                    placeholder="First Name"
                    className=" text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo"
                  />
                </div>
                <div className="flex-grow">
                <label className="block text-gray-400 font-bold mb-2">
                Last Name
                  </label>
                  <input
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                    placeholder="Last Name"
                    className=" text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo"
                  />
                </div>
              </div>
              <label className="block text-gray-400 font-bold mt-3 mb-2">
                  Bio
                  </label>
              <textarea
              value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                    className=" text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo"
              />
              <label className="block text-gray-400 font-bold mt-3 mb-2">
              Location
                  </label>
              <input
              value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                    className=" text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo"
              />
              <label className="block text-gray-400 font-bold mt-3 mb-2">
              Website
                  </label>
              <input
              value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"
                    className=" text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo"
              />
              <div className=" pt-2.5 ">
              <label className="block text-gray-400 font-bold ">
                Birthday</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              
              <MobileDatePicker
              className="border-2 text-white"
                label="birthday"
                inputFormat="MM/dd/yyyy"
                value={birthDate}
                onChange={(e) => setBirthDate(e)}
                renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input className="cursor-pointer text-gray-100 placeholder-gray-100 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border border-gray-500 rounded-sm bg-dark_blue_logo  focus:border-light_blue_logo focus:border-0  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-light_blue_logo" ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
              />
              </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
