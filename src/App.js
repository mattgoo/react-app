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


// back button 
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


// for my age
import dayjs from 'dayjs';


// Info page
import { FaReact, FaNode, FaPython, FaLinux, FaJava, FaWindows, FaGithub, FaGithubAlt } from 'react-icons/fa';
import { SiDjango, SiMysql, SiAdobe, SiKalilinux } from 'react-icons/si';


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
        <Route path="projects" element={<Projects />} />
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

// go to Home page function
function goToHome() {
  window.location.href = '/';
}

function goToProjects() {
  window.location.href = '/projects';
}


// popup alert function asking user if they want to leave the page
// function leavePage() {
//   if (window.confirm("Open Matt's school and personl Github?")) {
//     goToMyGithub();
//   }
// }


function goToMyGithub (choice) {
  if (choice === 'personal') {
    window.open('https://github.com/mattgoo');
  } else if (choice === 'school') {
    window.open('https://github.com/mngoodwin');
  }
}

function goToTHMProfile() {
  window.open('https://tryhackme.com/p/mattgoo');
}

// go to about page of icons selected
function goToIcon(icon) {
  if(icon === 'python') {
    window.open('https://www.python.org/');
  } else if (icon === 'django') {
    window.open('https://www.djangoproject.com/');
  } else if (icon === 'react') {
    window.open('https://reactjs.org/');
  } else if (icon === 'node') {
    window.open('https://nodejs.org/en/');
  } else if (icon === 'mysql') {
    window.open('https://www.mysql.com/');
  } else if (icon === 'java') {
    window.open('https://www.java.com/en/');
  } else if (icon === 'linux') {
    window.open('https://www.linux.org/');
  } else if (icon === 'windows') {
    window.open('https://www.microsoft.com/en-us/windows/');
  } else if (icon === 'adobe') {
    window.open('https://www.adobe.com/');
  } else if (icon === 'kali') {
    window.open('https://www.kali.org/');
  }
}


function Home() {
  const [ip, setLoc] = React.useState('');
  fetch('https://ip-api.io/json').then(response => response.json()).then(data => setLoc(data.ip));

  const [AboutTitle, setInfoTitle] = React.useState('About');
  const [GalleryTitle, setGalleryTitle] = React.useState('Gallery');
  const [age, setAge] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setAge(((dayjs().diff(dayjs('2000-01-01'), 'seconds')) / (60 * 60 * 24 * 365.25)).toFixed(9));
    }, 500);
  }, []);
  // thx ottomated


  return (
    <div className='App'>
      <Box sx={{width: '100%'}}>
        <Stack spacing={2} sx={{height:'100%'}}>
          <Grid className='grid-container' container spacing={12}>
            <Grid className='grid-inner' onClick={goToAbout} item xs={4} sx={{ backgroundImage: `url(${infoImg})`}}>
              <h1 className='big-Text'>{AboutTitle}</h1>
            </Grid>
            <Grid className='grid-inner' onClick={goToGallery} item xs={4} sx={{ backgroundImage: `url(${galleryImg})`}}>
              <h1 className='big-Text'>{GalleryTitle}</h1>
            </Grid>
            <Grid className='grid-inner' onClick={goToProjects} item xs={4} sx={{ backgroundImage: `url(${projectsImg})`}}>
              <h1 className='big-Text'>Projects</h1>
            </Grid>
          </Grid>
          <div className='centered'>
            <h1>Hi, my name is Matt Goodwin and I am currently <span className='loud'>{age}</span> years old.</h1>
          </div>
          <div className='center-on-screen'>
            <h1 className='info-text'>
              <p1>Welome, {ip}!</p1>
            </h1>
          </div> 
        </Stack>
      </Box>
    </div>
  );
}

function About() {
  return (
    <Stack spacing={2} className='stack-container'>
      <div>
        <IconButton onClick={goToHome}>
          <HomeIcon className='white-home'/>
        </IconButton>
      </div>
      <h1 className='aboutText'>
        <span className='loud'>About Me</span>
      </h1>
      <div className='center-on-screen'>
        <Grid container spacing={2} className='info-grid'>
          <Grid item xs={12} sm={6} className='info-text'>
            <h1 className='aboutText'>
              I am a <span className='loud'>full stack web developer</span> with a passion for learning and problem solving.
            </h1>
          </Grid>
          <Grid item xs={12} sm={6} className='info-text'>
            <h1 className='aboutText'>
              I have a background in software engineering and <span className='loud'>enjoy programming</span>.
            </h1>
          </Grid>
        </Grid>
      </div>
      <h1 className='aboutTextSmall'>
        <span className='loud'>Skills</span><br /><span className='notice-me'>(Icons Clickable)</span>
      </h1>
      <div className='center-on-screen'>
        <Grid container spacing={2} className='info-grid'>
          <Grid item xs={12} sm={6} className='info-text'>
            <h1 className='info-text'>
              Python - Java - Linux - Kali - Windows - C - SQL - Git - Django - Adobe - and more <br />
              <FaPython className='icon' size={70} onClick={() => goToIcon("python")}/>
              <FaJava className='icon' size={70} onClick={() => goToIcon("java")}/>
              <FaLinux className='icon' size={70} onClick={() => goToIcon("linux")}/>
              <SiKalilinux className='icon' size={70} onClick={() => goToIcon("kali")}/>
              <FaWindows className='icon' size={70} onClick={() => goToIcon("windows")}/>
              <SiMysql className='icon' size={70} onClick={() => goToIcon("mysql")}/>
              <FaGithub className='icon' size={70} onClick={() => goToIcon("github")}/>
              <SiDjango className='icon' size={70} onClick={() => goToIcon("django")}/>
              <SiAdobe className='icon' size={70} onClick={() => goToIcon("adobe")}/>
            </h1>
          </Grid>
          <Grid item xs={12} sm={6} className='info-text'>
            <h2 className='info-text'>
              I am currently learning React, Node, and React Native.<br />
              <FaReact className='icon' size={70} onClick={() => goToIcon("react")}/>
              <FaNode className='icon' size={70} onClick={() => goToIcon("node")}/>
            </h2>
          </Grid>
        </Grid>
      </div>  
      <div className='center-on-screen'>
        <div onClick={goToTHMProfile}>
          <h1 className='link-text'>Try Hack Me Profile</h1>
        </div>
      </div>
    </Stack>
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

// fix me
function Gallery() {
  return (
    <Stack className='App'>
      <IconButton onClick={goToHome}>
        <HomeIcon className='white-home'/>
      </IconButton>
      <h1 className='normal-Text'>Gallery!</h1>
      <h6 className='small-Text'>(Work in Progress: will load eventually)</h6>
      <ImageList
        className='image-list'
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem className='enlarge-pic' key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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

function Projects() {
  return (
    <Stack spacing={2} className='stack-container'>
      <IconButton onClick={goToHome}>
        <HomeIcon className='white-home'/>
      </IconButton>
      <h1 className='aboutText'>
        Githubs
      </h1>
      <div className='center-on-screen'>
        <Grid container spacing={2} className='info-grid'>
          <Grid item xs={12} sm={6} onClick={() => goToMyGithub("personal")}>
            <div className='git-page'>
              <h1>
                Personal Github
              </h1>
              <FaGithub size={140}/>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className='info-grid'>
          <div className='git-page'>
              <h1>
                School Github
              </h1>
              <FaGithubAlt size={140}/>
            </div>
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}

export default App;
