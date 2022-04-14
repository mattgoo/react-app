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
  Route,
  Routes
} from "react-router-dom";

// gallery images
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { minWidth } from '@mui/system';

// set page header
document.title = 'Matt Goodwin';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];


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
            <Grid className='grid-inner' onClick={goToAbout} item xs={4} sx={{ backgroundImage: `url(${infoImg})`, minWidth: '33%'}}>
              <h1 className='big-Text'>{AboutTitle}</h1>
            </Grid>
            <Grid className='grid-inner' onClick={goToGallery} item xs={4} sx={{ backgroundImage: `url(${galleryImg})`}}>
              <h1 className='big-Text'>{GalleryTitle}</h1>
            </Grid>
            <Grid className='grid-inner' onClick={goToMyGithub} item xs={4} sx={{ backgroundImage: `url(${projectsImg})`}}>
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

function AGallery() {
  return (
    <div className='App'>
      <h1 className='big-Text'>Gallery</h1>
    </div>
  );
}

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Gallery() {
  return (
    <div className='App' sx>
      <ImageList
        className='image-list'
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}



export default App;
