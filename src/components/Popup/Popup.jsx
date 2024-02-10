/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Close = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Backdrop = styled.div`
  opacity: ${(props) => {
    return props.isopen === "true" ? "1" : "0";
  }};
  pointer-events: ${(props) => {
    return props.isopen === "true" ? "all" : "none";
  }};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.2s all;
  z-index: 10;
`;

const Modal = styled.div`
  z-index: 20;
  width: 30rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 0 0 0 2rem;
  padding: 3rem;
  transition: 0.5s all cubic-bezier(0.77, -0.01, 0.32, 0.99);

  transform: translateX(${(props) => (props.isopen === "true" ? "0" : "100%")});
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function PopUp(props) {
  return (
    <>
      <Modal isopen={props.isopen.toString()}>
        <Close onClick={props.onClose}>
          <IoClose />
        </Close>
        <Content>{props.children}</Content>
      </Modal>
      <Backdrop isopen={props.isopen.toString()} onClick={props.onClose} />
    </>
  );
}

