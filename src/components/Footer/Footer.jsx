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
import { useState } from 'react';

function Footer() {
	const { startTimer, isActive, stopTimer } = useTimer();
	const [isFullScreen, toggleFullScreen] = useFullScreen();
	const [isOpen, setIsOpen] = useState(false);
	const [page, setPage] = useState('');
	return (
		<>
			<div className={style.footer}>
				<ActionBtn
					size='small'
					onClick={() => {
						setIsOpen(true);
						setPage('music');
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
						setIsOpen(true);
						setPage('todo');
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
					isOpen={isOpen}
					position='bottom'
					onClose={() => {
						setIsOpen(false);
					}}
				>
					{page === 'music' && <div>Music</div>}
					{page === 'todo' && <div>To Do List</div>}
				</PopUp>,
				document.getElementById('modal')
			)}
		</>
	);
}

export default Footer;
