export default function VideoPlayer({ id }) {
	return (
		<div className="embed-container">
			<iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen></iframe>
		</div>
	);
}
