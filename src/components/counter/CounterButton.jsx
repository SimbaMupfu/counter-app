import { PropTypes } from 'prop-types'
import { useState } from 'react'

export default function CounterButton({ by, incrementMethod, decrementMethod }){  

    const [count, setCount] = useState(0)
    
    function incrementCurrentCounter(){
        setCount(count + by)
        incrementMethod(by)
    }

    function decrementCurrentCounter(){
        setCount(count - by)
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <div>
                <button 
                className="counterButton" 
                onClick={incrementCurrentCounter}>+{by}</button>
                <button 
                className="counterButton" 
                onClick={decrementCurrentCounter}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number.isRequired
}