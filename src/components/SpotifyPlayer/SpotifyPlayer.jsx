const SpotifyPlayer = ({ src }) => {
	return (
		<iframe
			style={{ borderRadius: '12px' }}
			src={src}
			width='600'
			height='500'
			frameBorder='0'
			allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
			loading='lazy'
		></iframe>
	);
};

export default SpotifyPlayer;
