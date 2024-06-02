import { useState } from 'react';

const useFullScreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen().catch((e) => {
				alert(
					`Error attempting to enable full-screen mode: ${e.message} (${e.name})`
				);
			});
			setIsFullScreen(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			setIsFullScreen(false);
		}
	};

	return [isFullScreen, toggleFullScreen];
};

export default useFullScreen;
