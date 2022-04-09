import MiniHeader from "../components/screens/miniHeader";
import PostPublisher from "../components/screens/postPublisher";
import BottomNavigationBar from "../components/screens/bottomNavigationBar";
import RightSideBar from "../components/screens/rightSideBar";
import PostsList from "../components/screens/postsList";
import LeftSideBar from "../components/screens/leftSideBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/u/login");
    }
  }, [isLoggedIn]);
  return (
    <div className="relative bg-dark_one">
      <div className=" flex justify-center   w-full">
        <LeftSideBar page="home" />

        <div className="relative w-full  lg:w-3/4 xl:w-3/6">
          <div className="sticky top-0 z-30">
            <MiniHeader />
          </div>

          <hr className="border-gray-800" />
          <PostPublisher />
          <hr className="border-gray-800 border-4" />

          <PostsList />
        </div>

        <RightSideBar />
      </div>
      {/* bottom sheet */}
      <div className="md:hidden absolute w-full  bottom-0 z-50 bg-dark_one backdrop-brightness-50 ">
        <BottomNavigationBar />
      </div>

      {/* <div className="absolute bottom-0 h-20 w-full bg-dark_three sm:flex sm:items-center sm:justify-center">
        
      </div> */}
    </div>
  );
}
