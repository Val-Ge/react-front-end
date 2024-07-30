//useState 
import { useState } from "react";

export default function Counter(){
   const [num, setNum] = useState(5);
    setNum(10);
   const changeNum = () => {

   }
    return (
        <div>
            <p>The Count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}