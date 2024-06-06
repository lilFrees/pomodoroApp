import { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import BG0 from '../assets/bg0.jpeg';
import BG1 from '../assets/bg1.jpeg';
import BG2 from '../assets/bg2.jpeg';
import BG3 from '../assets/bg3.jpeg';
import BG4 from '../assets/bg4.jpeg';
import BG5 from '../assets/bg5.jpeg';
import BG6 from '../assets/bg6.jpeg';
import BG7 from '../assets/bg7.jpeg';
import BG8 from '../assets/bg8.jpeg';
import BG9 from '../assets/bg9.jpeg';

import bg0Small from '../assets/small/bg0.jpg';
import bg1Small from '../assets/small/bg1.jpg';
import bg2Small from '../assets/small/bg2.jpg';
import bg3Small from '../assets/small/bg3.jpg';
import bg4Small from '../assets/small/bg4.jpg';
import bg5Small from '../assets/small/bg5.jpg';
import bg6Small from '../assets/small/bg6.jpg';
import bg7Small from '../assets/small/bg7.jpg';
import bg8Small from '../assets/small/bg8.jpg';
import bg9Small from '../assets/small/bg9.jpg';

const BackgroundContext = createContext();

const images = [
	{
		id: 0,
		src: BG0,
		small: bg0Small,
	},
	{
		id: 1,
		src: BG1,
		small: bg1Small,
	},
	{
		id: 2,
		src: BG2,
		small: bg2Small,
	},
	{
		id: 3,
		src: BG3,
		small: bg3Small,
	},
	{
		id: 4,
		src: BG4,
		small: bg4Small,
	},
	{
		id: 5,
		src: BG5,
		small: bg5Small,
	},
	{
		id: 6,
		src: BG6,
		small: bg6Small,
	},
	{
		id: 7,
		src: BG7,
		small: bg7Small,
	},
	{
		id: 8,
		src: BG8,
		small: bg8Small,
	},
	{
		id: 9,
		src: BG9,
		small: bg9Small,
	},
];

const initialState = {
	currentImage: JSON.parse(localStorage.getItem('bgImg')) || images[0],
	allImages: images,
};

const BackgroundProvider = function ({ children }) {
	function reducer(state, action) {
		switch (action.type) {
			case 'SET_IMAGE':
				return { ...state, currentImage: state.allImages[action.payload] };
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);

	function setImage(id) {
		dispatch({ type: 'SET_IMAGE', payload: id });
		localStorage.setItem('bgImg', JSON.stringify(state.allImages[id]));
	}

	useEffect(() => {
		const imageData = localStorage.getItem('bgImg')
			? JSON.parse(localStorage.getItem('bgImg'))
			: state.currentImage;

		!localStorage.getItem('bgImg') &&
			localStorage.setItem('bgImg', JSON.stringify(imageData));
	}, [state.currentImage]);

	return (
		<BackgroundContext.Provider value={{ ...state, setImage }}>
			{children}
		</BackgroundContext.Provider>
	);
};

export { BackgroundProvider, BackgroundContext };
