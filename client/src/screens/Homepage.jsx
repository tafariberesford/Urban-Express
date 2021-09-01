import react from 'react';
import { useState } from 'react';

export default function Homepage() {

  const slideData = [
    {
      image1: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
  
    {
      image2: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80'
    },
  
    {
      image3: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzgyNjk1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60'
    },
  
    {
      image4: 'https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1442&q=80'
    },
  
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Osun_Sacred_Grove%2C_Osogbo_Osun_state.jpg'
    }
  ];

  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  )
};