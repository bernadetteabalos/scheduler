import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //Transition between modes
  const transition = function (newMode, replace = false) {
    if (replace) {
      setMode(newMode)
      setHistory((prevState) => [...prevState])
    }
    setMode(newMode);
    setHistory((prevState) => [...prevState])
  };

  const back = function () {
    if (history.length > 1) {
      history.pop()
      setMode(history[history.length - 1]);
    } else {
      setMode(mode);
    }
  };

  return { mode, transition, back };
};
