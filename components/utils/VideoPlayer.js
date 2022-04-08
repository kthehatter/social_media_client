import ReactPlayer from 'react-player/youtube'
export default function VideoPlayer(props) {
  return (
        <div className="aspect-w-16 aspect-h-9 rounded">
      {!props.src.includes("youtube.com") && (
          <video controls>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      )}
        {props.src.includes("youtube.com") && (
            <ReactPlayer
                url={props.src}
                width="100%"
                height="100%"
                controls
                />
        )}
    </div>
  );
}
