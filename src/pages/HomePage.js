import '../App.css';
import infoImg from '../images/infoImg.png';
import galleryImg from '../images/galleryImg.png';
import projectsImg from '../images/projectsImg.png';
import React from 'react';

//for Home page
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// for my age
import dayjs from 'dayjs';

// go to About page function 
function goToAbout() {
    window.location.href = '/about';
}

// got to Gallery page function
function goToGallery() {
    window.location.href = '/gallery';
}

function goToProjects() {
    window.location.href = '/projects';
}


function Home() {
    // const [loc, setLoc] = React.useState(null);
    // const [ip, setIP] = React.useState(null);

    // fetch('https://ip-api.io/json').then(response => response.json()).then(data => setLoc(data.city));
    // fetch('https://ip-api.io/json').then(response => response.json()).then(data => setIP(data.ip));

    console.log("Home");

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
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} sx={{ height: '100%' }}>
                    <Grid className='grid-container' container spacing={12}>
                        <Grid className='grid-inner' onClick={goToAbout} item xs={4} sx={{ backgroundImage: `url(${infoImg})` }}>
                            <h1 className='big-Text'>{AboutTitle}</h1>
                        </Grid>
                        <Grid className='grid-inner' onClick={goToGallery} item xs={4} sx={{ backgroundImage: `url(${galleryImg})` }}>
                            <h1 className='big-Text'>{GalleryTitle}</h1>
                        </Grid>
                        <Grid className='grid-inner' onClick={goToProjects} item xs={4} sx={{ backgroundImage: `url(${projectsImg})` }}>
                            <h1 className='big-Text'>Projects</h1>
                        </Grid>
                    </Grid>
                    <div className='centered'>
                        <h1>Hi, my name is Matt Goodwin and I am currently <span className='loud'>{age}</span> years old.</h1>
                    </div>
                    {/* <div className='center-on-screen'>
           <h1 className='info-text'>
             <p1>Welome, user from {loc}!</p1><br />
             <p1>{ip}</p1>
           </h1>
         </div>  */}
                </Stack>
            </Box>
        </div>
    );
}

export default Home;