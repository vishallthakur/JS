import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp () {
    return (
        <div>
            <h1>Custom APP | Coder</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Coder"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        targer: '_blank',
    },
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    <App />
)
