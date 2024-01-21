import VideoPlayer from './VideoPlayer.jsx';
import featuredThumb from '../assets/thumbs/featuredthumb.png?url';
import { useState } from 'react';

const Featured = () => {
	const [showPlayer, setShowPlayer] = useState(false);
	const [showBlur, setShowBlur] = useState(false);
	const handleShowBlur = (show) => {
		setShowBlur(show);
	};

	const handleShowPlayer = () => {
		setShowPlayer(!showPlayer);
	};

	return (
		<section id="one">
			<header className="major">
				<div className="featuredContainer">
					{showPlayer ? (
						<VideoPlayer id={824901138} />
					) : (
						<div
							className="thumbContainer"
							onClick={() => handleShowPlayer()}
							onMouseEnter={() => handleShowBlur(true)}
							onMouseLeave={() => handleShowBlur(false)}
						>
							<img className={showBlur ? `featuredThumb blur` : `featuredThumb`} src={featuredThumb} />
							<div className={showBlur ? `featuredPlay icon solid fa-play` : `featuredPlayHidden`}></div>
						</div>
					)}
					<h2>
						Below you can find a few samples of my work
						<br />
						and what I can bring to your next project.
					</h2>
				</div>
			</header>
		</section>
	);
};

export default Featured;
