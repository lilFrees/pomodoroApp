import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export function useTimer() {
  return useContext(TimerContext);
}
