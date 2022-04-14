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
    img: require('./images/gallery/CourierPoster.png'),
    title: 'Courier Poster',
    rows: 5,
    cols: 2,
  },
  {
    img: require('./images/gallery/IMG_0091.PNG'),
    title: 'img_0091',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0101.PNG'),
    title: 'img_0101',
    rows: 1.5,
    cols: 1,
  },  
  {
    img: require('./images/gallery/IMG_0098.PNG'),
    title: 'img_0098',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0100.PNG'),  
    title: 'img_0100',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0108.PNG'),
    title: 'img_0108',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0111.PNG'),
    title: 'img_0111',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0161.PNG'),
    title: 'img_0161',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/Cover1.png'),
    title: 'Cover1',
    rows: 2.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0167.PNG'),
    title: 'img_0167',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0169.PNG'),
    title: 'img_0169',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0170.PNG'),
    title: 'img_0170',
    rows: 1.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0171.PNG'),
    title: 'img_0171',
    rows: 2.5,
    cols: 1,
  },
  {
    img: require('./images/gallery/IMG_0173.PNG'),
    title: 'img_0173',
    rows: 1,
    cols: 4,
  },
  {
    img: require('./images/gallery/IMG_0174.PNG'),
    title: 'img_0174',
    rows: 5,
    cols: 4,
  },
  {
    img: require('./images/gallery/IMG_0175.PNG'),
    title: 'img_0175',
    rows: 2,
    cols: 1,
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
            <Grid className='grid-inner' onClick={goToAbout} item xs={4} sx={{ backgroundImage: `url(${infoImg})`}}>
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
    <Stack className='App'>
      <h1 className='gallery-Text'>Gallery!</h1>
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
    </Stack>
  );
}



export default App;
