import { useState } from "react"

export const useCounter = (initialState = 10) => {
const [Counter, setCounter] = useState(initialState);
    const increment = () => {
        setCounter(Counter + 1)
    }
    const decrement = () => {
        setCounter(Counter - 1) 
    }
    const reset = () => {
        setCounter(initialState)
    }
    return {
        Counter,
        increment,
        decrement,
        reset
    };
}
