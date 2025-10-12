import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyiopasdfghjklxcvbnm";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_{}[]:,./";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-10xl font-bold text-blue-500 underline text-center mt-10">
          Tailwind Works 🎉
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" placeholder="password" readOnly />
        </div>
      </div>
    </>
  );
}

export default App;
