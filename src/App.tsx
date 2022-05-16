import "./dbr"
import { useState } from "react";
import { useEffect } from "react";
import { VideoDecode } from "./components/scanner";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";

function App() {
  const [showScanner, setShowScanner] = useState(false)

  useEffect(() => {
    const loadLib = async () => {
      BarcodeScanner
      .loadWasm().then(success => {
        console.log("WASM Loaded succfully")
      }).catch(err => {
        console.error("WASM Failed loading", err)
      });
    }

    loadLib();
    return () => {}
  }, [])

  function handleClick() {
    setShowScanner(true)
  }

  return (
    <div className="helloWorld">
      <h3>Hello World</h3>
      <button onClick={handleClick}> Click </button>
      <div className="container">
        {
          showScanner ? <VideoDecode/> : "Click to show scanner"
        }
      </div>
    </div>
  );
}

export default App;
