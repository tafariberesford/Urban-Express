import { useHistory, Link } from 'react-router-dom';

export default function SongList(props) {

  const { songs } = props;
  const history = useHistory();

  return (
    <div className='list-page'>
      <div className='list-container'>
        {songs.map((song) => (
          <div className='song-card' key={song.id} onClick={() => history.push (`/songs/${song.id}`)}>
            <img src={song?.image_url} />
            <p>{song.title}</p>
            <p>{song.artist}</p>
          </div>
        )
        )}
      </div>
      <Link to='/addSong'>
        <button>Create</button>
      </Link>
    </div>
  )
}