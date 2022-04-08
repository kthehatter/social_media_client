import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import {
  userLoginApiCall,
  userRegisterApiCall,
  userTokenValidationApiCall,
} from "../../controllers/screens/user/Auth";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setUserLoggedIn, setUserProfilePicture } from "../../features/user/user";
export default function LoginPage(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [passwordIsSame, setPasswordIsSame] = useState(null);
  let [inputs, setInputs] = useState({
    account: "",
    password: "",
  });
  let { account, password } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let body = { account, password };
    try {
      await userLoginApiCall(body)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.accessToken);
            toast.success("Login successfully");
            dispatch(setUserInfo(res.data.user));
            dispatch(setUserProfilePicture(res.data.user.profile_picture));
            router.push("/");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
          toast.error(err.response.data.message);
        });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong try again later");
    }
  };
  const verifyUser = async () => {
    console.log("verifyUser");
    try {
      await userTokenValidationApiCall()
        .then((res) => {
          console.log("verified");
          if (res.status === 200) {
            dispatch(setUserLoggedIn(true));
            dispatch(setUserInfo(res.data.user));
            dispatch(setUserProfilePicture(res.data.profile_picture));
            return true;
          } else {
            dispatch(setUserLoggedIn(false));
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(setUserLoggedIn(false));
          return false;
        });
    } catch (err) {
      console.log(err);
      dispatch(setUserLoggedIn(false));
      return false;
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log("logged in");
    } else {
      verifyUser();
    }
  }, []);
  return (
    <section className="relative h-screen pt-16 pb-0 md:py-32 bg-dark_one">
      <div className="container px-4 mx-auto mb-16">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/khalilay/image/upload/v1646914563/Social%20media/g/logo_wgkv5n.png"
                  alt=""
                />
              </a>
              <h3 className="mb-4 text-text_light text-2xl md:text-3xl font-bold">
                Happening now
              </h3>
              <p className="text-lg text-text_light font-medium">
                Sign in to your account
              </p>
            </div>
            <form action="" onSubmit={handleLoginSubmit}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-text_active font-medium"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="account"
                  type="text"
                  name="account"
                  value={account}
                  onChange={onChange}
                  placeholder="Enter your email or username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-text_active font-medium"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  className="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between py-4 ">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-context_hover rounded "
                    />
                    <span className="ml-7 text-sm text-text_active font-medium">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="w-full md:w-auto ">
                  <a
                    className="inline-block text-sm font-medium text-context_color hover:text-context_hover"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-context_color hover:bg-context_hover focus:ring-2 focus:ring-context_color focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Sign In
              </button>
              <p className="text-center">
                <span className="text-sm text-text_alternative font-medium">
                  Don’t have an account?{"  "}{" "}
                </span>
                <Link href="/u/register">
                  <a className="inline-block text-sm font-medium text-context_color hover:text-context_hover hover:underline">
                    {" "}
                    Sign up
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
        src="https://res.cloudinary.com/khalilay/image/upload/v1647194917/Social%20media/g/6086857_1_mu2gf3.jpg"
        alt=""
      />
    </section>
  );
}
