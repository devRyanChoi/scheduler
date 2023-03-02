import {useState} from "react";

export default function useVisualMode(initial) {
    const [history, setHistory] = useState([initial]);

    const transition = function (newMode, replace = false) {
        if(replace) {
            setHistory((prev) => [...prev.slice(0, -1), newMode]);
            return
        }
        return setHistory((prev => [...prev, newMode]))
    };

    const back = function () {
        if(history.length !== 0) {
            setHistory((prev) => [...prev.slice(0, -1)]);
        }
    };
    return { mode: history[history.length - 1], transition, back };
}