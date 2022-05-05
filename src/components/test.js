import { height } from '@mui/system';
import '../styles/test.css';


const time = new Date().getTime();

console.log(`${time} - Test`);

// format the time
const timeFormatted = new Date(time).toLocaleString();

console.log(`${timeFormatted} - Test`);


function test() {
    return (
        <div className='main'>
            <div className='center'>
                {/* get image of an easter egg */}
                <img className='full-height' src='https://64.media.tumblr.com/59de7db7abbb9686eba13d8377976389/tumblr_nmcjrivGc61tgccr8o2_r1_250.gifv' alt='easter egg' />
                <img className='full-height' src='https://64.media.tumblr.com/59de7db7abbb9686eba13d8377976389/tumblr_nmcjrivGc61tgccr8o2_r1_250.gifv' alt='easter egg' />
                <img className='full-height' src='https://64.media.tumblr.com/59de7db7abbb9686eba13d8377976389/tumblr_nmcjrivGc61tgccr8o2_r1_250.gifv' alt='easter egg' />
            </div>
        </div>
    )
}

export default test;