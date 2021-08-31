import { useState, useEffect } from "react";
import Homepage from '../screens/Homepage';
import SongDetail from '../screens/SongDetail';
import SongEdit from '../screens/SongEdit';
import SongList from '../screens/SongList';
import SongCreate from '../screens/SongCreate';
import { getAllReviews, postReview } from "../services/reviews";
import { getAllSongs, postSong, putSong, deleteSong } from "../services/songs";
import { useHistory, Switch } from "react-router-dom";

export default function () {
  const [songs, setSongs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchSongs = async () => {
      const songList = await getAllSongs();
      setSongs(songList);
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getAllReviews();
      setReviews(reviewList);
    };
    fetchReviews();
  }, []);

  const handleCreate = async (formData) => {
    const songData = await postSong(formData);
    setSongs((prevState) => [...prevState, songData]);
    history.push('/songs');
  };

  const handleCreateReview = async (formData) => {
    const reviewData = await postReview(formData);
    setReviews((prevState) => [...prevState, reviewData]);
    history.push('/songDetail');
  };

  const handleUpdate = async (id, formData) => {
    const songData = await putSong(id, formData);
    setSongs((prevState) =>
      prevState.map((song) => {
        return song.id === Number(id) ? songData : song;
      })
    );
    history.push('/songDetail');
  };

  const handleDelete = async (id) => {
    await deleteSong(id);
    setSongs((prevState) => prevState.filter((song) => song.id !== id));
  };
  return (
    <div>
      <Switch>
        <Route to='/addSong'>
          <SongCreate currentUser={currentUser} handleCreate={handleCreate}/>
        </Route>
        
        <Route to='/songs/:id/edit'>
          <SongEdit currentUser={currentUser} songs={songs} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Route>

        <Route to='/songs/:id'>
          <SongDetail currentUser={currentUser} reviews={reviews} handleCreateReview={handleCreateReview}/>
        </Route>

        <Route to='/songs'>
          <SongList currentUser={currentUser} songs={songs}/>
        </Route>

        <Route to='/home'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  )

}