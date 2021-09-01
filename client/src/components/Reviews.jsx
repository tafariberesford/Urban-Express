import { useState } from 'react';

export default function (props) {

  const [formData, setFormData] = useState({
    title: " ",
    description: " ",
  });

  const { title, description } = formData;
  const { handleCreateReview, id } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
        e.preventDefault();
        handleCreateReview(id, formData);
        }}
        >
      <label>
        Review Title
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
        </label>
        
        <label>
        Description
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
        </label>
        <button>Submit Review</button>
      </form>
    </div>
  )
}