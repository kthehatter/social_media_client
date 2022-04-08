import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { userRegisterApiCall, userTokenValidationApiCall } from "../../controllers/screens/user/Auth";
import Head from "next/head";
import { setUserInfo, setUserLoggedIn, setUserProfilePicture } from "../../features/user/user";
import { useSelector, useDispatch } from "react-redux";
export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [passwordIsSame, setPasswordIsSame] = useState(null);
  let [inputs, setInputs] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    c_password: "",
  });
  let { username, firstName, lastName, email, password, c_password } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password !== c_password) {
      console.log("password is not same");
      setPasswordIsSame(false);
      return;
    }
    const body = { username, firstName, lastName, email, password };
    try {
      await userRegisterApiCall(body)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.accessToken);
            toast.success("Account created successfully");
            dispatch(setUserInfo(res.data.user));
            dispatch(setUserProfilePicture(res.data.user.profile_picture));

            router.push("/");
          } else {
            toast.error(res.data.message);
          }
          console.log(res);
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
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-full bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/khalilay/image/upload/v1647194917/Social%20media/g/6086857_1_mu2gf3.jpg')`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleRegisterSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => onChange(e)}
                    type="text"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="mb-4 md:flex ">
                  <div className="mb-4 w-1/2 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => onChange(e)}
                      type="text"
                      placeholder="First Name"
                    required
                    />
                  </div>
                  <div className="md:ml-2 w-1/2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="lastName"
                      onChange={(e) => onChange(e)}
                      id="lastName"
                      value={lastName}
                      type="text"
                      placeholder="Last Name"
                    required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={
                        passwordIsSame === false
                          ? "border-red-500 w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      }
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      placeholder="******************"
                    required
                    />
                    {passwordIsSame === false && (
                      <p className="text-xs italic text-red-500">
                        Password does not match.
                      </p>
                    )}
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className={
                        passwordIsSame === false
                          ? "border-red-500 w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      }
                      id="c_password"
                      type="password"
                      name="c_password"
                      value={c_password}
                      onChange={(e) => onChange(e)}
                      placeholder="******************"
                    required
                    />
                    {passwordIsSame === false && (
                      <p className="text-xs italic text-red-500">
                        Password does not match.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-context_color rounded-full hover:bg-context_hover focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-context_color align-baseline hover:text-context_hover"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-context_color align-baseline hover:text-context_hover"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
