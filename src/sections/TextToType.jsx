import "../css/TextToType.css";
import { useState, useEffect } from "react";

const TextToType = ({ text, trigger, onDone, cursorMode = "blink" }) => {
    const [display, setDisplay] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!trigger) {
            setDisplay("");
            setDone(false);
            return;
        }
        if (done) return;

        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i));
            i++;
            if (i > text.length) {
                clearInterval(interval);
                setDone(true);
                onDone && onDone();
            }
        }, 60);

        return () => clearInterval(interval);
    }, [text, trigger, onDone]);

    return (
        <div className="typing-wrapper">
            {display}
            {trigger && cursorMode === "blink" && (
                <span className={`cursor ${done ? "blink" : ""}`}></span>
            )}

            {trigger && cursorMode === "hide" && !done && (
                <span className="cursor"></span>
            )}
        </div>
    );
};

export default TextToType;
