import './App.css';
import infoImg from './images/infoImg.png';
import galleryImg from './images/galleryImg.png';
import projectsImg from './images/projectsImg.png';
import React from 'react';

//for Home page
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// for routing to other pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

// set page header
document.title = 'Matt Goodwin';



function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}


// go to About page function 
function goToAbout() {
  window.location.href = '/about';
}

// got to Gallery page function
function goToGallery() {
  window.location.href = '/gallery';
}



function Home() {
  const [AboutTitle, setInfoTitle] = React.useState('About');
  const [GalleryTitle, setGalleryTitle] = React.useState('Gallery');

  const goToMyGithub = () => {
    window.open('https://github.com/mattgoo');
    window.open('https://github.com/mngoodwin');
  };

  return (
    <div className='App'>
      <Box sx={{width: '100%'}}>
        <Stack spacing={2}>
          <Grid className='grid-container' container spacing={12}>
            <Grid className='grid-inner' 
                  item xs={4} 
                  sx={{ backgroundImage: `url(${infoImg})`}}>
              <h1 className='big-Text'>{AboutTitle}</h1>
            </Grid>
            <Grid className='grid-inner' 
                  item xs={4} sx={{ backgroundImage: `url(${galleryImg})`}}>
              <h1 className='big-Text'>{GalleryTitle}</h1>
            </Grid>
            <Grid className='grid-inner' onClick={goToAbout} item xs={4} sx={{ backgroundImage: `url(${projectsImg})`}}>
              <h1 className='big-Text'>Projects</h1>
            </Grid>
          </Grid>
          <div className='centered'>
            <h1>Matt Goodwin</h1>
          </div>
        </Stack>
      </Box>
    </div>
  );
}

function About() {
  return (
    <div className='App'>
      <h1 className='big-Text'>About</h1>
    </div>
  );
}

function Gallery() {
  return (
    <div className='App'>
      <h1 className='big-Text'>Gallery</h1>
    </div>
  );
}

export default App;
