import React from "react";
import { useState, useCallback,useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowd] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += `!@#$%^&*()_+-={}[]:;"'<>,.?/|`;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0,300);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 bg-gray-700">
        <h1 className="text-4xl text-center text-white mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-orange-500 bg-amber-100"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipBoard}
          className="cursor-pointer outline-none bg-blue-500 text-white px-3 py-.5 shrink-0 hover:bg-blue-900">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-500">Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowd((prev) => !prev);
              }}
            />
            <label className="text-orange-500" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-500" htmlFor="numberInput">
              character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
