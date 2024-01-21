import VideoPlayer from '../components/VideoPlayer';

const Popup = ({ id, handleClosePopup }) => {
	return (
		<div className="popupContainer" onClick={() => handleClosePopup()}>
			<div className="popupContent">
				<VideoPlayer id={id} />
			</div>
		</div>
	);
};
export default Popup;
