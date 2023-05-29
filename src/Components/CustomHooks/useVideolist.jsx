import { useEffect, useState } from "react";
import {getDatabase,ref,query,orderByKey,get,startAt,limitToFirst} from "firebase/database"
const useVideolist = (page) => {

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [videos,setVideos] = useState([])
    const [hasMore,setHasMore] = useState(true);

    useEffect(()=>{
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db,"videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );
            try{
               setError(false);
               setLoading(true);
               const shapshot = await get(videoQuery);
               setLoading(false);
               if(shapshot.exists()){
                setVideos((prevVideos)=>{
                    console.log(prevVideos)
                   return [...prevVideos,...Object.values(shapshot.val())];
                })
               }else{
                    setHasMore(false)
               }
            }catch(err){
               setLoading(false)
               setError(true);
            }

        }
        fetchVideos();
    },[page])

    return {
        loading,
        error,
        videos,
        hasMore,
    }
};

export default useVideolist;