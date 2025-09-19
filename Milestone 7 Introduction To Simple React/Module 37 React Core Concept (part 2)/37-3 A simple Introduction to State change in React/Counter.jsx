import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState (0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const counterStyle = {
        border: '2px solid green',
        padding: '30px',
        display: 'inline-block',
        borderRadius: '10px',
    }


    return (
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}


/*
URL: https://react.dev/reference/react/useState

useState
useState is a React Hook that lets you add a state variable to
your component.

const [state, setState] = useState(initialState)
*/