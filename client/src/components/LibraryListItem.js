import { Link } from 'react-router-dom';
import "../styles/LibraryListItem.scss";
import YoutubeEmbed from "./YoutubeEmbed";

const LibraryListItem = (props) => {
  const embededId = props.url.split("=")[1];
  const maxLength = 100;
  let newDescript = [...props.description]

  if (newDescript.length > maxLength) {
    newDescript =
      props.description.substring(0, maxLength) + '...';
  }

  const LinkStyle = {
    color: 'black'
  }

  return (
    <div>
      <div className="card">
        <figure>
          <YoutubeEmbed embedId={embededId} class="video-responsive small"/>
        </figure>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className='title is-4'>
              <Link to={`/library/${props.name}`} style={LinkStyle}>{props.name}</Link>
              </p>
            </div>
          </div>
          <div className="content">{newDescript}</div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LibraryListItem;
