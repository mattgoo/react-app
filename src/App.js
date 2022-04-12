import logo from './logo.svg';
import './App.css';

import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <Grid className='grid-container' container spacing={12}>
        <Grid className='grid-inner' item xs={4}>
          <h1>Info</h1>
        </Grid>
        <Grid className='grid-inner' item xs={4}>
          <h1>Gallery</h1>
        </Grid>
        <Grid className='grid-inner' item xs={4}>
          <h1>Projects</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
