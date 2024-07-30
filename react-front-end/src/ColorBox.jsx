import { useState } from "react";
import "./ColorBox.css";

//helperfunction for randomChoice in randomColor
function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
        return arr[idx]
}

//colorbox component
export default function ColorBox({colors}) {
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };
    return (
    <div 
    className="ColorBox"
    onClick={changeColor}
    style={{ backgroundColor: color }}
     ></div>);
    
}