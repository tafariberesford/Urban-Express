import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SongEdit(props) {

  const [formData, setFormData] = useState({
    image_url: " ",
    title: " ",
    artist: " ",
  });

  const { image_url, title, artist } = formData;
  const { songs, handleUpdate, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleSong = songs.find((song) => song.id === Number(id))
      setFormData({
        image_url: singleSong.image_url,
        title: singleSong.title,
        artist: singleSong.artist,
      })
    };
    if (songs.length) {
      prefillFormData();
    }
  }, [songs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  return (
    <div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Song</h3>
      <label>
        Insert Image
        <input
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Title
        <input
          type='text'
          name='Title'
          value={title}
          onChange={handleChange}
        />
      </label>
        <br />
        <label>
        Artist
        <input
          type='text'
          name='Artist'
          value={artist}
          onChange={handleChange}
        />
        </label>
        <button>Save Edit</button>
        <button onClick={() => handleDelete(id)}>Delete Song</button>
    </form>
    </div>
  )
}