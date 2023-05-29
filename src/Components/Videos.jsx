import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./Video";
import useVideolist from "./CustomHooks/useVideolist";
import { useState } from "react";
function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideolist(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading...."
          next={() => setPage(page + 8)}>
          {videos.map((video) => video.noq > 0 ? (
            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>) : (<Video title={video.title} id={video.youtubeID} noq={video.noq} key={video.youtubeID} />)
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading....</div>}
    </div>
  );
}

export default Videos;
