import { useEffect, useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    // monitor the re-render state
    useEffect(() => {
        console.log('Component rendered or rerendered');
      });

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <p>Current Count: {count}</p>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;