import VideoPlayer from '../components/VideoPlayer';

const Popup = ({ id, handleClosePopup }) => {
	return (
		<div className="popupContainer" onClick={(e) => handleClosePopup(e.target)}>
			<div className="popupContent" onClick={(e) => handleClosePopup(e.target)}>
				<VideoPlayer id={id} />
			</div>
		</div>
	);
};
export default Popup;
