import logo from './logo.svg';
import styles from './App.css';

import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className={styles.App}>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <h1>Info</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>Gallery</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>Projects</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
