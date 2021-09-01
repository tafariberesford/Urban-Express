import react from 'react';
import { useState } from 'react';

export default function Homepage() {

  const slideData = [
    {
      image1: 'https://i1.sndcdn.com/artworks-7igI9cWrpvt7-0-t500x500.jpg'
    },
  
    {
      image2: 'https://i.scdn.co/image/ab67616d0000b2736d8b9f3e7337f6bff76ceff6'
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