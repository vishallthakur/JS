import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(0)

    const addValue = () => {

        // setCounter(prevCounter => prevCounter + 1)
        if (counter < 20) {
            setCounter(counter + 1);
        }
    }

    const removeValue = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <h1>Coding with react</h1>
            <h2>Counter value: {counter}</h2>

            <div>
                <button onClick={addValue}>Add value</button>
                <button onClick={removeValue}>Remove Value</button>
            </div>
        </>
    )
}

export default App
