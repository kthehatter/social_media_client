import { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchPostsApiCall } from '../../controllers/screens/posts/fetchPosts';
import { addPosts, setPageNumber, setPosts } from '../../features/posts/posts';
import PostContent from './postContent';
export default function PostsList(props) {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.posts.posts);
    const pageNumber = useSelector((state) => state.posts.pageNumber);
    const [postsAreAllLoaded, setPostsAreAllLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fetchPostsList = async (pageNumber) => {
        console.log("fetchPostsList");
        try {
            await fetchPostsApiCall(pageNumber).then((res) => {
                console.log(res);
                if (res.status === 200) {
                    if (res.data.posts.length === 0) {
                        setPostsAreAllLoaded(true);
                    }else{
                        if (pageNumber ===1) {
                            dispatch(setPosts(res.data.posts));
                            
                        }else  {

                        dispatch(addPosts(res.data.posts))
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
        fetchPostsList(pageNumber + 1);
        dispatch(setPageNumber(pageNumber + 1));
        setIsLoading(true);
        }
    }
    useEffect(() => {
        if(postList.length === 0){
            fetchPostsList(pageNumber);
            setIsLoading(true);
        }
    }, []);
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