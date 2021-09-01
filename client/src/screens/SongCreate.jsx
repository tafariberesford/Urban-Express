import { useState } from "react";

export default function SongCreate(props) {

  const [formData, setFormData] = useState({
    image_url: " ",
    title: " ",
    artist: " ",
  });

  const { handleCreate } = props;
  const { image_url, title, artist } = formData
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Song</h3>
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
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
        <br />
        <label>
        Artist
        <input
          type='text'
          name='artist'
          value={artist}
          onChange={handleChange}
        />
        </label>
      <button>Submit Song</button>
    </form>
    </div>
  )
}