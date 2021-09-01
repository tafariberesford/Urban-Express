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
      image3: 'https://i1.sndcdn.com/artworks-sdNygCXd2zbGK1Yp-8tV2LA-t500x500.jpg'
    },
  
    {
      image4: 'https://dancehallarena.com/wp-content/uploads/2021/05/NICKI-MINAJ-SKILLIBENG-CROCODILE-TEETH-REMIX.jpg'
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