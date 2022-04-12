import './App.css';
import infoImg from './images/infoImg.png';
import galleryImg from './images/galleryImg.png';
import projectsImg from './images/projectsImg.png';
import React from 'react';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function App() {
  const [InfoTitle, setInfoTitle] = React.useState('Info');
  const [GalleryTitle, setGalleryTitle] = React.useState('Gallery');
  const [ProjectsTitle, setProjectsTitle] = React.useState('Projects');

  // function to change the title of the page to in progress on hover
  function changeInfo() {
    if (InfoTitle === 'Info') {
      setInfoTitle('In Progress');
    }
    else {
      setInfoTitle('Info');
    }
  } 

  function changeGallery() {
    if (GalleryTitle === 'Gallery') {
      setGalleryTitle('In Progress');
    }
    else {
      setGalleryTitle('Gallery');
    }
  }


  const goToMyGithub = () => {
    window.open('https://github.com/mattgoo');
  };

  

  return (
    <div>
      <div className='App'>
        <Grid className='grid-container' container spacing={12}>
          <Grid className='grid-inner' 
                item xs={4} 
                sx={{ backgroundImage: `url(${infoImg})`}} 
                onMouseEnter={changeInfo}
                onMouseLeave={changeInfo}>
            <h2 className='big-Text'>{InfoTitle}</h2>
          </Grid>
          <Grid className='grid-inner' 
                item xs={4} sx={{ backgroundImage: `url(${galleryImg})`}}
                onMouseEnter={changeGallery}
                onMouseLeave={changeGallery}>
            <h2 className='big-Text'>{GalleryTitle}</h2>
          </Grid>
          <Grid className='grid-inner' onClick={goToMyGithub} item xs={4} sx={{ backgroundImage: `url(${projectsImg})`}}>
            <h1 className='big-Text'>Projects</h1>
          </Grid>
        </Grid>
      </div>
    </div>

  );
}

export default App;
