import "./LibraryListItem.scss";

const LibraryListItem = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">{props.url}</p>
            </div>
          </div>
          <div className="content">{props.description}</div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LibraryListItem;
