import '../App.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import '../styles/ProjectsPage.css';

// back button 
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import { FaGithub, FaGithubAlt } from 'react-icons/fa';


function goToMyGithub(choice) {
    if (choice === 'personal') {
        window.open('https://github.com/mattgoo');
    } else if (choice === 'school') {
        window.open('https://github.com/mngoodwin');
    }
}


function goToHome() {
    window.location.href = '/';
}


function Projects() {
    return (
        <Stack spacing={2} className='stack-container'>
            <IconButton onClick={goToHome}>
                <HomeIcon className='white-home' />
            </IconButton>
            <h1 className='git-title'>
                Githubs
            </h1>
            <div className='center-projects'>
                <Grid container spacing={2} className='info-grid'>
                    <Grid item xs={12} sm={6} onClick={() => goToMyGithub("personal")}>
                        <div className='git-page'>
                            <h1>
                                Personal Github
                            </h1>
                            <FaGithub size={140} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} onClick={() => goToMyGithub("school")}>
                        <div className='git-page'>
                            <h1>
                                School Github
                            </h1>
                            <FaGithubAlt size={140} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    );
}

export default Projects;