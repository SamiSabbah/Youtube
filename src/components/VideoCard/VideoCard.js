import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" alt="pic" src={image} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt="channel pic"
          src={channelImage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
