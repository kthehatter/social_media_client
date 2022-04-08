import { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchProfilePostsApiCall } from '../../controllers/screens/posts/fetchProfilePosts';
import { addProfilePosts, setPageNumber, setProfilePosts } from '../../features/profiles/profile';
import PostContent from './postContent';
export default function ProfilePostsList(props) {
    const username = props.username;
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.profile.profilePosts);
    const [postsAreAllLoaded, setPostsAreAllLoaded] = useState(false);
    const pageNumber = useSelector((state) => state.profile.pageNumber);
    const [isLoading, setIsLoading] = useState(false);
    const fetchProfilePosts = async (pageNumber) => {
        try {
            await fetchProfilePostsApiCall(pageNumber,username).then((res) => {
                console.log(res);
                if (res.status === 200) {
                    if (res.data.posts.length === 0) {
                        setPostsAreAllLoaded(true);
                    }else{
                        if (pageNumber === 1) {
                            dispatch(setProfilePosts(res.data.posts));
                        }else{
                        dispatch(addProfilePosts(res.data.posts))
                        }
                        setIsLoading(false);
                    }
                }else{
                    setIsLoading(false);
                }
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
        } catch (err) {
            console.log(err);
                setIsLoading(false);
        }
        
    }
    const handleLoadMore = (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop ===  e.target.scrollingElement.scrollHeight && postsAreAllLoaded === false) {
            fetchProfilePosts(pageNumber + 1);
            dispatch(setPageNumber(pageNumber + 1));
        setIsLoading(true);
        }
    }
    useEffect(() => {
        if (postList.length === 0) {
            fetchProfilePosts(pageNumber);
            setIsLoading(true);
        }else if (postList[0].username !== username) {
            dispatch(setPageNumber(1));
            fetchProfilePosts(pageNumber);
            setIsLoading(true);
        }
    },[]);
    useEffect(() => {
        window.addEventListener("scroll", handleLoadMore);
        return () => {
          window.removeEventListener("scroll", handleLoadMore);
        };
      })
    return (
        <>
        <ul className="list-none pb-14 md:pb-4">
                {postList.map((post, index) => (
                    <li key={index}>
                        <PostContent isLast={index===postList.length-1?true:false} postDetails={post}/>
                    </li>
                ))}
            </ul>
            {isLoading && <div className="flex justify-center items-center h-20">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
        </>
   
  );
}