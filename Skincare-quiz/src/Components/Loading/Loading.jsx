import background from '..//../Images/results-page-pic.png';
import './Loading.css';

const Loading = () => {
    return (
        <div id='loading'>
            <img src={background} alt="background" />
            <p>Your results are being processed...</p>
            <div className="loading-circle"></div>
        </div>
    );
}

export default Loading;