import './App.css';
import infoImg from './images/infoImg.png';
import galleryImg from './images/galleryImg.png';
import projectsImg from './images/projectsImg.png';


import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


function App() {
  const goToMyGithub = () => {
    window.open('https://github.com/mattgoo');
  };

  return (
    <div>
      <div className='App'>
        <Grid className='grid-container' container spacing={12}>
          <Grid className='grid-inner' item xs={4} sx={{
            backgroundImage: `url(${infoImg})`,
          }}>
            <h1 className='big-Text'>Info</h1>
          </Grid>
          <Grid className='grid-inner' item xs={4} sx={{
            backgroundImage: `url(${galleryImg})`,
          }}>
            <h1 className='big-Text'>Gallery</h1>
          </Grid>
          <Grid className='grid-inner' onClick={goToMyGithub} item xs={4} sx={{
            backgroundImage: `url(${projectsImg})`,
          }}>
            <h1 className='big-Text'>Projects</h1>
          </Grid>
        </Grid>
      </div>
    </div>

  );
}

export default App;
