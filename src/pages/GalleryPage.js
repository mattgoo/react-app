import '../App.css';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import { useState, useCallback, useEffect } from 'react';


const itemData = [
    {
        src: require('../images/gallery/CourierPoster.png'),
        height: 3,
        width: 2,
    },
    {
        src: require('../images/gallery/IMG_0091.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0101.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0098.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0100.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0108.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0174.PNG'),
        height: 3,
        width: 4,
    },
    {
        src: require('../images/gallery/IMG_0111.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0161.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/Cover1.png'),
        height: 1.5,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0167.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0169.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0170.PNG'),
        height: 1,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0171.PNG'),
        height: 1.5,
        width: 1,
    },
    {
        src: require('../images/gallery/IMG_0173.PNG'),
        height: 1,
        width: 1.5,
    },
    {
        src: require('../images/gallery/IMG_0175.PNG'),
        height: 1.5,
        width: 1,
    },
];


function goToHome() {
    window.location.href = '/';
}

function GalleryPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Stack className='App'>
            <IconButton onClick={goToHome}>
                <HomeIcon className='white-home' />
            </IconButton>
            <Gallery photos={itemData} direction={"column"} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={itemData.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Stack>
    );
}

export default GalleryPage;