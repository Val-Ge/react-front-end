function handleClick(){
    console.log("CLICKED THE BUTTON!!!");
}

function handleHover() {
    console.log("Hovered!!");
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover over me</p>
            <p>Click The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}