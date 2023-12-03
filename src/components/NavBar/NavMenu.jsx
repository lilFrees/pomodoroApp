/* eslint-disable react/prop-types */
import style from "./NavMenu.module.css";
import { motion } from "framer-motion";

function NavMenu(props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={spring}
      className={style.nav}
      onClick={props.onClose}
    >
      <div className={style.actions}></div>
      <ul className={style.list}></ul>
    </motion.div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 50,
};

export default NavMenu;
