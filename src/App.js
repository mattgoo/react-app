import './App.css';

import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <Grid className='grid-container' container spacing={12}>
        <Grid className='grid-inner' item xs={4}>
          <h1 className='big-Text'>Info</h1>
        </Grid>
        <Grid className='grid-inner' item xs={4}>
          <h1 className='big-Text'>Gallery</h1>
        </Grid>
        <Grid className='grid-inner' item xs={4} >
          <h1 className='big-Text'>Projects</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
