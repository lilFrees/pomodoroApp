import { FaPlus } from 'react-icons/fa';
import style from './TodoAdd.module.css';

function TodoAdd(props) {
	return (
		<button className={style.add} onClick={props.onClick}>
			<FaPlus />
		</button>
	);
}

export default TodoAdd;
