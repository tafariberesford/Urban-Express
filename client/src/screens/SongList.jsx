import { useHistory, Link } from 'react-router-dom';

export default function SongList(props) {

  const { songs } = props;
  const history = useHistory();

  return (
    <div className='list-page'>
      <div className='list-container'>
        {songs.map((song) => (
          <div className='song-card' key={song.id} onClick={() => history.push (`/songs/${song.id}`)}>
            <h3>
              Hottest Top 10 Songs of 2021
            </h3>
            <p>{song.image_url}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}