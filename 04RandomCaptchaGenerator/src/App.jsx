import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [length, setlength] = useState(10)
  const [isNumPresent, setisNumPresent] = useState(false);
  const [isCharPresent, setisCharPresent] = useState(false);
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumPresent) {
      str += '0123456789'
    }
    if (isCharPresent) {
      str += "@#$%^&*()_+!"
    }

    for (let i = 0; i < length; i++) {
      let charPos = Math.floor(Math.random() * str.length);
      console.log("char to select", charPos)

      pass += str.charAt(charPos)
    }

    setPassword(pass)

  }, [isCharPresent, isNumPresent, length, setPassword])

  const savePasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, passwordGenerator])


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Generated Captcha
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={password}
              id='password'
              ref={passwordRef}
              readOnly
              placeholder="Captcha will show here"
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 font-mono text-lg tracking-wider text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
            <button
              type="button"
              className="shrink-0 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:bg-slate-700 hover:text-white"
              onClick={savePasswordToClip}
            >
              Copy
            </button>
          </div>
          <div className='py-2 flex items-center gap-2'>
            <input type="range"
              min={4}
              max={15}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <div>
              <span className='text-white'>Length: {length}</span>
            </div>

            <div>
              <input
                type='checkbox'
                value={isNumPresent}
                onChange={(e) => setisNumPresent((prev) => !prev)}
              >
              </input>
            </div>
            <div>
              <span className='text-white'>Number</span>
            </div>
            <div>
              <input
                type='checkbox'
                value={isCharPresent}
                onChange={(e) => setisCharPresent((prev) => !prev)}
              >
              </input>
            </div>
            <div>
              <span className='text-white'>Characters</span>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
