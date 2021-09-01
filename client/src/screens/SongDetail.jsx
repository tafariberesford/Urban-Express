import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneSong } from '../services/songs';
import Reviews from '../components/Reviews';
import './SongDetail.css'

export default function SongDetail(props) {
  const [singleSong, setSingleSong] = useState(null);
  
  const { songs, reviews, handleCreateReview } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleSong = async () => {
      const songItem = await getOneSong(id)
      setSingleSong(songItem)
    }
    fetchSingleSong();
  }, [])
  
  return (
    <div>
      <div className="song-detail">
      <img src={singleSong?.image_url} />
      <p>{singleSong?.title}</p>
      <p>{singleSong?.artist}</p>
    </div>
      {singleSong?.reviews.map((review) => (
        <div className="review-container" key={review.id}> 
        <p>{review?.title}</p>
        <p>{review?.description}</p>
        <p>-{review?.user?.username }</p>
      </div>
      ))}
      <Reviews id={id} handleCreateReview={handleCreateReview} />
      <Link to={`/songs/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}