// import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   //useref
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyiopasdfghjklxcvbnm";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*_{}[]:,./";

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 101);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);
//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
//         <h1 className="text-white text-center">Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none bg-amber-50 w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//           ></input>
//           <button
//             onClick={copyPasswordToClipboard}
//             className="
//           outline-none
//            bg-blue-700
//             text-white px-3 py-0.5 shrink-0
//             "
//           >
//             Copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             ></input>
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             ></input>
//             <label htmlFor="numberInput"> Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev);
//               }}
//             ></input>
//             <label htmlFor="characterInput"> Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyiopasdfghjklxcvbnm";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_{}[]:,./";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main Card with 3D effect */}
        <div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
            transform: "perspective(1000px) rotateX(2deg)",
          }}
        >
          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Password Generator
          </h1>

          {/* Password Display */}
          <div className="relative mb-8">
            <div
              className="flex shadow-2xl rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm"
              style={{
                boxShadow:
                  "inset 0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              <input
                type="text"
                value={password}
                className="outline-none bg-gradient-to-r from-gray-900/50 to-gray-800/50 text-white w-full py-4 px-6 text-xl font-mono tracking-wider placeholder-gray-400"
                placeholder="Your secure password"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 active:scale-95"
                style={{
                  boxShadow: "0 4px 15px rgba(6, 182, 212, 0.4)",
                }}
              >
                {copied ? (
                  <span className="flex items-center gap-2">✓ Copied!</span>
                ) : (
                  "Copy"
                )}
              </button>
            </div>
          </div>

          {/* Controls Section */}
          <div className="space-y-6">
            {/* Length Slider */}
            <div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              style={{
                boxShadow:
                  "inset 0 2px 8px rgba(0,0,0,0.2), 0 2px 8px rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <label className="text-white text-lg font-medium">
                  Password Length
                </label>
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="w-full h-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-full appearance-none cursor-pointer slider"
                onChange={(e) => setLength(e.target.value)}
                style={{
                  background: `linear-gradient(to right, rgb(34, 211, 238) 0%, rgb(168, 85, 247) ${
                    ((length - 6) / 44) * 100
                  }%, rgba(255,255,255,0.1) ${
                    ((length - 6) / 44) * 100
                  }%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Numbers Toggle */}
              <div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                style={{
                  boxShadow:
                    "inset 0 2px 8px rgba(0,0,0,0.2), 0 2px 8px rgba(255,255,255,0.05)",
                }}
                onClick={() => setNumberAllowed((prev) => !prev)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                      numberAllowed
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                        : "bg-gray-600/50"
                    }`}
                    style={{
                      boxShadow: numberAllowed
                        ? "0 0 20px rgba(74, 222, 128, 0.5), inset 0 1px 3px rgba(0,0,0,0.3)"
                        : "inset 0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-lg ${
                        numberAllowed ? "left-7" : "left-1"
                      }`}
                    ></div>
                  </div>
                  <label className="text-white text-lg font-medium cursor-pointer">
                    Include Numbers
                  </label>
                </div>
              </div>

              {/* Special Characters Toggle */}
              <div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                style={{
                  boxShadow:
                    "inset 0 2px 8px rgba(0,0,0,0.2), 0 2px 8px rgba(255,255,255,0.05)",
                }}
                onClick={() => setCharAllowed((prev) => !prev)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                      charAllowed
                        ? "bg-gradient-to-r from-pink-400 to-purple-500"
                        : "bg-gray-600/50"
                    }`}
                    style={{
                      boxShadow: charAllowed
                        ? "0 0 20px rgba(236, 72, 153, 0.5), inset 0 1px 3px rgba(0,0,0,0.3)"
                        : "inset 0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-lg ${
                        charAllowed ? "left-7" : "left-1"
                      }`}
                    ></div>
                  </div>
                  <label className="text-white text-lg font-medium cursor-pointer">
                    Special Characters
                  </label>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={passwordGenerator}
              className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              style={{
                boxShadow:
                  "0 8px 32px rgba(168, 85, 247, 0.5), inset 0 1px 2px rgba(255,255,255,0.2)",
              }}
            >
              🎲 Generate New Password
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>
            🔒 Your password is generated locally and never sent to any server
          </p>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 4px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(34, 211, 238, 1);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 4px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(34, 211, 238, 1);
        }
      `}</style>
    </div>
  );
}

export default App;
