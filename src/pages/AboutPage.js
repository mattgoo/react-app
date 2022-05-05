import '../App.css';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import { FaReact, FaNode, FaPython, FaLinux, FaJava, FaWindows, FaGithub } from 'react-icons/fa';
import { SiDjango, SiMysql, SiAdobe, SiKalilinux, SiTryhackme } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';


function goToHome() {
    window.location.href = '/';
}

function goToMyGithub(choice) {
    if (choice === 'personal') {
        window.open('https://github.com/mattgoo');
    } else if (choice === 'school') {
        window.open('https://github.com/mngoodwin');
    }
}

function goToTHMProfile() {
    window.open('https://tryhackme.com/p/mattgoo');
}

function goToIcon(icon) {
    if (icon === 'python') {
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
    } else if (icon === 'javascript') {
        window.open('https://www.javascript.com/');
    }
}


function About() {
    return (
        <Stack spacing={2} className='stack-container'>
            <div>
                <IconButton onClick={goToHome}>
                    <HomeIcon className='white-home' />
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
                            Python - Java - Linux - Kali - Cyber Security - Windows - C - SQL - Git - Django - Adobe - and more <br />
                            <FaPython className='icon' size={70} onClick={() => goToIcon("python")} />
                            <FaJava className='icon' size={70} onClick={() => goToIcon("java")} />
                            <FaLinux className='icon' size={70} onClick={() => goToIcon("linux")} />
                            <SiTryhackme className='icon' size={70} onClick={() => goToTHMProfile()} />
                            <SiKalilinux className='icon' size={70} onClick={() => goToIcon("kali")} />
                            <FaWindows className='icon' size={70} onClick={() => goToIcon("windows")} />
                            <SiMysql className='icon' size={70} onClick={() => goToIcon("mysql")} />
                            <FaGithub className='icon' size={70} onClick={() => goToMyGithub("personal")} />
                            <SiDjango className='icon' size={70} onClick={() => goToIcon("django")} />
                            <SiAdobe className='icon' size={70} onClick={() => goToIcon("adobe")} />
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={6} className='info-text'>
                        <h2 className='info-text'>
                            I am currently learning React, Node, and React Native.<br />
                            <FaReact className='icon' size={70} onClick={() => goToIcon("react")} />
                            <DiJavascript1 className='icon' size={70} onClick={() => goToIcon("javascript")} />
                            <FaNode className='icon' size={70} onClick={() => goToIcon("node")} />
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

export default About;