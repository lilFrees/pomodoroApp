/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import BG0 from "../assets/bg0.jpeg";
import BG1 from "../assets/bg1.jpeg";
import BG2 from "../assets/bg2.jpeg";
import BG3 from "../assets/bg3.jpeg";
import BG4 from "../assets/bg4.jpeg";
import BG5 from "../assets/bg5.jpeg";
import BG6 from "../assets/bg6.jpeg";
import BG7 from "../assets/bg7.jpeg";
import BG8 from "../assets/bg8.jpeg";
import BG9 from "../assets/bg9.jpeg";

const BackgroundContext = createContext();

const images = [
  {
    id: 0,
    src: BG0,
  },
  {
    id: 1,
    src: BG1,
  },
  {
    id: 2,
    src: BG2,
  },
  {
    id: 3,
    src: BG3,
  },
  {
    id: 4,
    src: BG4,
  },
  {
    id: 5,
    src: BG5,
  },
  {
    id: 6,
    src: BG6,
  },
  {
    id: 7,
    src: BG7,
  },
  {
    id: 8,
    src: BG8,
  },
  {
    id: 9,
    src: BG9,
  },
];

const initialState = {
  currentImage: JSON.parse(localStorage.getItem("bgImg")) || images[0],
  allImages: images,
};

const BackgroundProvider = function ({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_IMAGE":
        return { ...state, currentImage: state.allImages[action.payload] };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function setImage(id) {
    dispatch({ type: "SET_IMAGE", payload: id });
    localStorage.setItem("bgImg", JSON.stringify(state.allImages[id]));
  }

  useEffect(() => {
    const imageData = localStorage.getItem("bgImg")
      ? JSON.parse(localStorage.getItem("bgImg"))
      : state.currentImage;

    !localStorage.getItem("bgImg") &&
      localStorage.setItem("bgImg", JSON.stringify(imageData));
  }, [state.currentImage]);

  return (
    <BackgroundContext.Provider value={{ ...state, setImage }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundProvider, BackgroundContext };
