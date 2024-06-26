import PropTypes from 'prop-types';
import './CircularProgressBar.css';

/**
 * CircularProgressBar component displays a circular progress bar with a given progress value.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.progress - The progress value to be displayed on the progress bar.
 * @param {string} props.id - The unique identifier for the SVG element.
 * @param {string} props.progressText - The text to be displayed at the center of the progress bar.
 * @returns {JSX.Element} - The rendered CircularProgressBar component.
 */
const CircularProgressBar = ({ progress, id, progressText }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress / 100);

    return (
        <svg width="100" height="100" id={id}>
            <circle id='inner-circle' cx="50" cy="50" r={radius} />
            <circle id='outer-circle' cx="50" cy="50" r={radius} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
            <text x="50" y="50" textAnchor="middle" dominantBaseline="middle">{progressText}</text>
        </svg>
    )
}

CircularProgressBar.propTypes = {
    progress: PropTypes.number,
    id: PropTypes.string,
    progressText: PropTypes.string
}

export default CircularProgressBar;