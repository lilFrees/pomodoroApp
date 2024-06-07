import ActionBtn from '../Button/ActionBtn';
import style from './Footer.module.css';
import { GoListUnordered } from 'react-icons/go';
import { IoIosMusicalNotes } from 'react-icons/io';
import { useTimer } from '../../hooks/useTimer';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import Button from '../Button/Button';
import { createPortal } from 'react-dom';
import { PopUp } from '../PopUp/PopUp';
import useFullScreen from '../../hooks/useFullScreen';
import { useEffect, useState } from 'react';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import img1 from '../../assets/thumbnails/playlist0.jpeg';
import img2 from '../../assets/thumbnails/playlist1.jpeg';
import img3 from '../../assets/thumbnails/playlist2.jpeg';
import ToDo from '../Todo/Todo';

const playlists = [
	{
		id: 0,
		image: img1,
		link: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?si=29abbb613e4048fb?utm_source=generator',
	},
	{
		id: 1,
		image: img2,
		link: 'https://open.spotify.com/embed/playlist/4x9OtLt7bsmvqktbF0Y0Gm?utm_source=generator',
	},
	{
		id: 2,
		image: img3,
		link: 'https://open.spotify.com/embed/playlist/1DMaxcMJ5MHUgJXpT7Yfzj?utm_source=generator',
	},
];

function Footer() {
	const { startTimer, isActive, stopTimer } = useTimer();
	const [isFullScreen, toggleFullScreen] = useFullScreen();
	const [isMusicOpen, setIsMusicOpen] = useState(false);
	const [isTaskOpen, setIsTaskOpen] = useState(false);
	const [selectedPlaylist, setSelectedPlaylist] = useState(0);

	useEffect(() => {
		function escape(e) {
			if (e.key === 'Escape') {
				setIsMusicOpen(false);
				setIsTaskOpen(false);
			}
		}

		if (isMusicOpen || isTaskOpen) {
			document.addEventListener('keyup', escape);
		}

		return () => {
			document.removeEventListener('keyup', escape);
		};
	}, [isMusicOpen, isTaskOpen]);

	return (
		<>
			<div className={style.footer}>
				<ActionBtn
					size='small'
					onClick={() => {
						setIsMusicOpen(true);
					}}
				>
					<IoIosMusicalNotes />
				</ActionBtn>

				{/* ======================================== */}

				<ActionBtn
					alpha='1'
					onClick={isActive ? stopTimer : startTimer}
					size='mid'
					className={style.start}
				>
					{isActive ? 'Stop' : 'Start'}
				</ActionBtn>

				{/* ======================================== */}

				<ActionBtn
					size='small'
					onClick={() => {
						setIsTaskOpen(true);
					}}
				>
					<GoListUnordered />
				</ActionBtn>
			</div>
			<div>
				<Button
					alpha='3'
					className={style.fullScreen}
					onClick={toggleFullScreen}
				>
					{isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
				</Button>
			</div>
			{createPortal(
				<PopUp
					isOpen={isMusicOpen}
					position='bottom'
					onClose={() => {
						setIsMusicOpen(false);
					}}
				>
					<div className={style.player}>
						<div className={style.albumList}>
							{playlists.map((el, i) => (
								<button
									className={`${style.album} ${
										i === selectedPlaylist && style.selected
									}`}
									key={i}
									onClick={() => {
										setSelectedPlaylist(i);
									}}
								>
									<img
										className={style.thumbnail}
										src={el.image}
										alt={`Album #${i}`}
									/>
								</button>
							))}
						</div>
						<SpotifyPlayer src={playlists[selectedPlaylist].link} />
					</div>
				</PopUp>,
				document.getElementById('modal')
			)}
			{createPortal(
				<PopUp
					isOpen={isTaskOpen}
					position='bottom'
					onClose={() => {
						setIsTaskOpen(false);
					}}
				>
					<div>
						<ToDo />
					</div>
				</PopUp>,
				document.getElementById('modal')
			)}
		</>
	);
}

export default Footer;
