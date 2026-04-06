import { useState } from 'react'
import CounterButton from './CounterButton'
import './Counter.css'
import ResetButton from '../ResetButton'

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounter(by){
        setCount(count + by)
    }

    function decrementCounter(by){
        setCount(count - by)
    }

    function resetCounter(){
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <CounterButton by={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <CounterButton by={5} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <ResetButton resetMethod={resetCounter} />
        </>
    )
}