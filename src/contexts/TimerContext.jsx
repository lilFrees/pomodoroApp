/* eslint-disable react/prop-types */
import { createContext, useEffect, useCallback, useReducer } from 'react';

import alarm from '../assets/alarm.mp3';

export const TimerContext = createContext();

const TIMERS = [
	{ type: 'FOCUS', time: 25 * 60, count: 0 },
	{ type: 'SHORT', time: 5 * 60, count: 0 },
	{ type: 'LONG', time: 15 * 60, count: 0 },
];

const initialState = {
	timers: TIMERS,
	customTimers: TIMERS,
	currentTimer: TIMERS[0],
	isActive: false,
	timeRemaining: TIMERS[0].time,
	autoRunning: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'RUNNING':
			return { ...state, timeRemaining: state.timeRemaining - 1 };
		case 'START':
			return { ...state, isActive: true };
		case 'STOP':
			return {
				...state,
				isActive: false,
				timeRemaining: state.currentTimer.time,
			};
		case 'SWITCH':
			return {
				...state,
				currentTimer: state.timers[action.payload],
				timeRemaining: state.timers[action.payload].time,
			};
		case 'CLEAR':
			return {
				...state,
				currentTimer: TIMERS[0],
				timeRemaining: TIMERS[0].time,
				isActive: false,
			};
		case 'CUSTOMIZE':
			return {
				...state,
				timers: action.payload,
			};
		case 'RESET_TO_DEFAULT':
			return {
				...state,
				timers: TIMERS, // Set timers back to default values
				currentTimer: TIMERS[0], // Set the current timer to the first default timer
				timeRemaining: TIMERS[0].time, // Set time remaining to the duration of the first default timer
			};
		case 'AUTO':
			return {
				...state,
				autoRunning: action.payload,
			};
		default:
			throw new Error('Case not found');
	}
}

const TimerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const startTimer = useCallback(() => dispatch({ type: 'START' }), []);

	const stopTimer = useCallback(() => {
		dispatch({ type: 'STOP' });
	}, []);

	function clearCounts() {
		localStorage.setItem(JSON.stringify(TIMERS));
	}

	// Change Timers
	const switchTimerType = useCallback(
		(type) => {
			if (state.timers[type] !== state?.currentTimer.type) {
				dispatch({ type: 'SWITCH', payload: type });
			}
		},
		[state.currentTimer, state.timers]
	);

	const customizeTimers = function (customTimers) {
		dispatch({ type: 'CUSTOMIZE', payload: customTimers });
		console.log(state.timers);

		const timersWithTime = customTimers.map((timer) => ({
			...timer,
			time: timer.time,
		}));

		localStorage.setItem('timers', JSON.stringify(timersWithTime));
	};

	// Reset Timers to Default
	const resetToDefault = function () {
		dispatch({ type: 'RESET_TO_DEFAULT' });
		localStorage.setItem('timers', JSON.stringify(TIMERS)); // Update localStorage with default timers
	};

	// Toggle Auto Running

	const toggleAutoRun = function (toggle) {
		dispatch({ type: 'AUTO', payload: toggle });
	};

	// Place timers to localStorage
	useEffect(() => {
		const timersData = localStorage.getItem('timers')
			? JSON.parse(localStorage.getItem('timers'))
			: TIMERS;

		!localStorage.getItem('timers') &&
			localStorage.setItem('timers', JSON.stringify(timersData));
	}, []);

	// Play and stop the timer

	useEffect(() => {
		let interval = null;

		if (state.isActive && state.timeRemaining > 0) {
			interval = setInterval(() => {
				dispatch({ type: 'RUNNING' });
			}, 1000);
		} else if (!state.isActive || state.timeRemaining === 0) {
			clearInterval(interval);
		}

		if (state.timeRemaining === 0) {
			let timersData = JSON.parse(localStorage.getItem('timers'));
			const currentIndex = timersData.findIndex(
				(timer) => timer.type === state.currentTimer.type
			);

			timersData[currentIndex].count += 1;

			console.log(timersData);

			dispatch({
				type: 'CUSTOMIZE',
				payload: timersData,
			});

			localStorage.setItem('timers', JSON.stringify(timersData));

			if (!state.autoRunning) {
				dispatch({ type: 'STOP' });
			}

			// Alarm

			const audio = new Audio(alarm);
			audio.play();

			const timerCount = timersData.reduce(
				(acc, current) => acc + current.count,
				1
			);

			if (timerCount % 8 === 0) {
				dispatch({ type: 'SWITCH', payload: 2 });
			} else if (timerCount % 2 === 0) {
				dispatch({ type: 'SWITCH', payload: 1 });
			} else {
				dispatch({ type: 'SWITCH', payload: 0 });
			}
		}

		return () => clearInterval(interval);
	}, [state]);

	const value = {
		...state,
		startTimer,
		stopTimer,
		clearCounts,
		switchTimerType,
		customizeTimers,
		resetToDefault,
		toggleAutoRun,
	};

	return (
		<TimerContext.Provider value={value}>{children}</TimerContext.Provider>
	);
};

export default TimerProvider;
