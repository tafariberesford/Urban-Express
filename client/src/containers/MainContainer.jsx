import { useState, useEffect } from "react";
import Homepage from '../screens/Homepage';
import SongDetail from '../screens/SongDetail';
import SongEdit from '../screens/SongEdit';
import SongList from '../screens/SongList';
import SongCreate from '../screens/SongCreate';
import { getAllReviews, postReview } from "../services/reviews";
import { getAllSongs, postSong, putSong, deleteSong } from "../services/songs";
import { useHistory, Switch, Route } from "react-router-dom";

export default function (props) {
  const [songs, setSongs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
  useEffect(() => {
    const fetchSongs = async () => {
      const songList = await getAllSongs();
      setSongs(songList);
    };
    if (currentUser) {
      fetchSongs()
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getAllReviews();
      setReviews(reviewList);
    };
    if (currentUser) {
      fetchReviews();
    }
  }, [currentUser]);

  const handleCreate = async (formData) => {
    const songData = await postSong(formData);
    setSongs((prevState) => [...prevState, songData]);
    history.push('/songs');
  };

  const handleCreateReview = async (formData) => {
    const reviewData = await postReview(formData);
    setReviews((prevState) => [...prevState, reviewData]);
    history.push('/songs');
  };

  const handleUpdate = async (id, formData) => {
    const songData = await putSong(id, formData);
    setSongs((prevState) =>
      prevState.map((song) => {
        return song.id === Number(id) ? songData : song;
      })
    );
    history.push('/songs');
  };

  const handleDelete = async (id) => {
    await deleteSong(id);
    setSongs((prevState) => prevState.filter((song) => song.id !== Number(id)));
  };
  return (
    <div>
      <Switch>
        <Route exact path='/addSong'>
          <SongCreate handleCreate={handleCreate}/>
        </Route>
        
        <Route exact path='/songs/:id/edit'>
          <SongEdit songs={songs} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Route>

        <Route exact path='/songs/:id'>
          <SongDetail reviews={reviews} handleCreateReview={handleCreateReview}/>
        </Route>

        <Route exact path='/songs'>
          <SongList songs={songs}/>
        </Route>

        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  
  )


}