import { IoClose } from 'react-icons/io5';
import style from './Popup.module.css';

function PopUp(props) {
	let configStyle = {};

	switch (props.position) {
		case 'right':
			configStyle = {
				top: '0',
				right: '0',
				borderRadius: '0 0 0 2rem',
				transform: `translateX(${props.isOpen ? '0' : '100%'})`,
				zIndex: 99999,
				width: '30rem',
			};
			break;
		case 'bottom':
			configStyle = {
				bottom: '0',
				left: '50%',
				borderRadius: '2rem 2rem 0 0',
				transform: `translateY(${
					props.isOpen ? '0' : '100%'
				}) translateX(-50%)`,
				zIndex: 9999,
				width: '60rem',
				overflowY: 'hidden',
			};
			break;
	}
	return (
		<>
			<div className={style.modal} style={configStyle}>
				<button className={style.closeBtn} onClick={props.onClose}>
					<IoClose />
				</button>
				<div className={style.content}>{props.children}</div>
			</div>
			<div
				className={style.backdrop}
				style={{
					opacity: props.isOpen ? 1 : 0,
					pointerEvents: props.isOpen ? 'all' : 'none',
					zIndex: 999,
				}}
				onClick={props.onClose}
			/>
		</>
	);
}

export { PopUp };
