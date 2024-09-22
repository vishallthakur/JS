import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charaterAllowed, setCharaterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charaterAllowed) str += "@#$%&-_+()*!?~|^{}\=[]"

    for (let i = 1; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [passwordLength, numberAllowed, charaterAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[passwordLength, numberAllowed, charaterAllowed, passwordGenerator])



  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-slate-900'>
        <div className='flex shadow-xl overflow-hidden mb-4 p-5' >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 border-"
            placeholder='Password'
            readOnly 
            ref={passwordRef}
            />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 px-5 pb-4'>
          <div className='flex flex-col item-center gap-y-2'>
            <div className='slider flex gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={passwordLength}
                className='cursor-pointer'
                id='password-length-input'
                onChange={(e) => { setPasswordLength(e.target.value) }} />
              <label htmlFor="">Length: {passwordLength}</label>
            </div>
            <div className='num-allowed flex gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='number-input'
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }} />
              <label htmlFor="">Numbers Allowed</label>
            </div>
            <div className='char-allowed flex gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='character-input'
                onChange={() => {
                  setCharaterAllowed((prev) => !prev);
                }} />
              <label htmlFor="">Characters Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
