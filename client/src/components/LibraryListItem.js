import "./LibraryListItem.scss";

const LibraryListItem = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Bicep Curls</p>
            <p className="subtitle is-6">@Dumbells, Barbells</p>
          </div>
        </div>
        <div className="content">
          Trains biceps brachii, brachialis and brachioradialis
        </div>
      </div>
    </div>

    
  );
};

export default LibraryListItem;
