/* eslint-disable react-hooks/exhaustive-deps */
import style from './NavBar.module.css';
import { CgMenuLeftAlt } from 'react-icons/cg';
import Button from '../Button/Button';
import { PopUp } from '../PopUp/PopUp';
import { useContext, useEffect, useReducer } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { UserContext } from '../../contexts/UserContext';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Slider, Switch } from '@mui/material';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { VscDebugRestart } from 'react-icons/vsc';
import { IoIosSettings } from 'react-icons/io';
import { FaImage } from 'react-icons/fa';
import { IoIosBookmarks } from 'react-icons/io';
import { PiCoffeeFill } from 'react-icons/pi';
import useWindowSize from '../../hooks/useWindowSize';

function NavBar() {
	const {
		switchTimerType,
		currentTimer,
		isActive,
		autoRunning,
		timeRemaining,
		customizeTimers,
		resetToDefault,
		timers,
		toggleAutoRun,
	} = useTimer();

	const { currentImage, allImages, setImage } = useContext(BackgroundContext);

	const size = useWindowSize();

	const initialState = {
		timerCount: [0, 0, 0],
		isOpen: false,
		page: '',
		studyTime: timers[0].time,
		shortBreakTime: timers[1].time,
		longBreakTime: timers[2].time,
	};

	const reducer = function (state, action) {
		switch (action.type) {
			case 'TIMER_COUNT':
				return { ...state, timerCount: action.payload };
			case 'OPEN':
				return { ...state, isOpen: true };
			case 'CLOSE':
				return { ...state, isOpen: false };
			case 'PAGE':
				return { ...state, page: action.payload };
			case 'GO_BACK':
				return { ...state, page: '' };
			case 'SET_STUDY_TIME':
				return {
					...state,
					studyTime: action.payload,
				};
			case 'SET_SHORT_BREAK_TIME':
				return {
					...state,
					shortBreakTime: action.payload,
				};
			case 'SET_LONG_BREAK_TIME':
				return {
					...state,
					longBreakTime: action.payload,
				};
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const { username } = useContext(UserContext);

	function openCustom() {
		dispatch({ type: 'PAGE', payload: 'timers' });
	}

	function openImages() {
		dispatch({ type: 'PAGE', payload: 'images' });
	}

	useEffect(() => {
		const customTimers = [
			{ type: 'FOCUS', time: state.studyTime, count: 0 },
			{ type: 'SHORT', time: state.shortBreakTime, count: 0 },
			{ type: 'LONG', time: state.longBreakTime, count: 0 },
		];

		const timeOut = setTimeout(() => {
			customizeTimers(customTimers);
		}, 1500);

		return () => {
			clearTimeout(timeOut);
		};
	}, [state.longBreakTime, state.shortBreakTime, state.studyTime]);

	function goBack() {
		dispatch({ type: 'GO_BACK' });
	}

	function openHandler() {
		dispatch({ type: 'OPEN' });
	}

	function closeHandler() {
		setTimeout(() => {
			goBack();
		}, 500);
		dispatch({ type: 'CLOSE' });
	}

	useEffect(() => {
		if (timers) {
			dispatch({
				type: 'TIMER_COUNT',
				payload: timers.map((timer) => Number(timer.count)),
			});
		}
	}, [timers]);

	return (
		<div className={style.navbar}>
			<motion.div
				initial={{ width: '0%' }}
				animate={{ width: `${(timeRemaining / currentTimer.time) * 100}%` }}
				transition={{
					type: 'spring',
					stiffness: 30,
				}}
				className={style.progress}
			/>
			<h2 className={style.username}>{username}</h2>
			{size.width >= 800 && (
				<>
					<div className={style.actions}>
						<Button
							type='button'
							alpha='1'
							className={style.action}
							onClick={() => {
								switchTimerType(0);
							}}
							disabled={isActive}
							title={isActive ? 'Stop the timer to switch it' : ''}
						>
							{state.timerCount[0]} pomodoros
						</Button>
						<Button
							type='button'
							alpha='1'
							className={style.action}
							onClick={() => {
								switchTimerType(1);
							}}
							disabled={isActive}
							title={isActive ? 'Stop the timer to switch it' : ''}
						>
							{state.timerCount[1]} breaks
						</Button>
						<Button
							type='button'
							alpha='1'
							className={style.action}
							onClick={() => {
								switchTimerType(2);
							}}
							disabled={isActive}
							title={isActive ? 'Stop the timer to switch it' : ''}
						>
							{state.timerCount[2]} long breaks
						</Button>
					</div>
				</>
			)}
			<div>
				<Button
					type='button'
					alpha='1'
					className={style.navToggleBtn}
					onClick={openHandler}
					id='toggle'
				>
					<CgMenuLeftAlt />
				</Button>
			</div>
			{createPortal(
				<PopUp isOpen={state.isOpen} onClose={closeHandler} position='right'>
					{!state.page && (
						<>
							<button className={style.navBtn} onClick={resetToDefault}>
								<VscDebugRestart />
								Reset to Default
							</button>
							<button className={style.navBtn} onClick={openCustom}>
								<IoIosSettings />
								Customize the Timers
							</button>
							<button className={style.navBtn} onClick={openImages}>
								<FaImage />
								Change Background Image
							</button>

							{size.width < 800 && (
								<>
									<Button
										type='button'
										alpha='1'
										className={style.navBtn}
										onClick={() => {
											switchTimerType(0);
											closeHandler();
										}}
										disabled={isActive}
										title={isActive ? 'Stop the timer to switch it' : ''}
									>
										<IoIosBookmarks />
										Study Session [{state.timerCount[0]}]
									</Button>
									<Button
										type='button'
										alpha='1'
										className={style.navBtn}
										onClick={() => {
											switchTimerType(1);
											closeHandler();
										}}
										disabled={isActive}
										title={isActive ? 'Stop the timer to switch it' : ''}
									>
										<PiCoffeeFill />
										Short Break [{state.timerCount[1]}]
									</Button>
									<Button
										type='button'
										alpha='1'
										className={style.navBtn}
										onClick={() => {
											switchTimerType(2);
											closeHandler();
										}}
										disabled={isActive}
										title={isActive ? 'Stop the timer to switch it' : ''}
									>
										<PiCoffeeFill />
										Long Break [{state.timerCount[2]}]
									</Button>
								</>
							)}
						</>
					)}
					{state.page && (
						<button className={style.backBtn} onClick={goBack}>
							<HiArrowSmLeft />
						</button>
					)}
					{state.page === 'timers' && (
						<>
							<Slider
								className={style.navSlider}
								value={state.studyTime / 60}
								min={1}
								step={1}
								max={100}
								onChange={(e, newValue) => {
									!isActive &&
										dispatch({
											type: 'SET_STUDY_TIME',
											payload: newValue * 60,
										});
								}}
							/>
							{`${state.studyTime / 60} min`}
							{/* Slider to control study time */}
							<Slider
								className={style.navSlider}
								value={state.shortBreakTime / 60}
								min={1}
								step={1}
								max={100}
								onChange={(e, newValue) => {
									!isActive &&
										dispatch({
											type: 'SET_SHORT_BREAK_TIME',
											payload: newValue * 60,
										});
								}}
							/>
							{`${state.shortBreakTime / 60} min`}
							{/* Slider to control short break time */}
							<Slider
								className={style.navSlider}
								value={state.longBreakTime / 60}
								min={1}
								step={1}
								onChange={(e, newValue) => {
									!isActive &&
										dispatch({
											type: 'SET_LONG_BREAK_TIME',
											payload: newValue * 60,
										});
								}}
							/>
							{`${state.longBreakTime / 60} min`}
							{/* Slider to control long break time */}

							<Switch
								className={style.navSlider}
								checked={autoRunning}
								onChange={(e) => {
									toggleAutoRun(e.target.checked);
								}}
								style={{ color: 'lime' }}
							/>
							{`Auto start Timers`}
						</>
					)}
					{state.page === 'images' && (
						<div className={style.images}>
							{allImages.map((image, i) => (
								<button
									className={style.bgImg}
									key={image.id}
									onClick={() => {
										setImage(i);
									}}
								>
									<img
										src={image.small}
										alt={`Image ${i}`}
										className={`${style.img} ${
											image.id === currentImage.id ? style.currentImg : ''
										}`}
									/>
								</button>
							))}
						</div>
					)}
				</PopUp>,
				document.getElementById('modal')
			)}
		</div>
	);
}

export default NavBar;
