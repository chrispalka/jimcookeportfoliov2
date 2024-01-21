export default function VideoPlayer({ id }) {
	return (
		<div class="embed-container">
			<iframe
				src={`https://player.vimeo.com/video/${id}`}
				frameborder="0"
				webkitAllowFullScreen
				mozallowfullscreen
				allowFullScreen
			></iframe>
		</div>
	);
}
