
export default function Cicker2({buttonText, message}) {
    const handleClick = () => {
        alert(message);
    }
    return <button onClick={handleClick}>{buttonText}</button>;
          
    
}