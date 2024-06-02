import style from './Timer.module.css';
import Button from '../Button/Button';
import { useTimer } from '../../hooks/useTimer';
import { Helmet } from 'react-helmet';

function Timer() {
	const { timeRemaining, isActive } = useTimer();

	const minutes = Math.floor(timeRemaining / 60);
	const seconds = timeRemaining % 60;

	return (
		<div className={style.timer}>
			<Helmet>
				<title>
					{isActive
						? `
            ${minutes < 10 ? `0${minutes}` : `${minutes}`} :
          ${seconds < 10 ? `0${seconds}` : `${seconds}`}
            `
						: `FocusBoost - Increase your focus`}
				</title>
			</Helmet>
			<Button alpha='3' className={style.clock}>
				{minutes < 10 ? `0${minutes}` : minutes}:
				{seconds < 10 ? `0${seconds}` : seconds}
			</Button>
			<Button alpha='3' className={style.mantra}>
				&quot;Discipline is the bridge between goals and accomplishments&quot;.
			</Button>
		</div>
	);
}

export default Timer;
