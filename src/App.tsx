import { BarcodeScanner } from "dynamsoft-javascript-barcode";
import { useState } from "react";
import { useEffect } from "react";
import { VideoDecode } from "./components/scanner";

BarcodeScanner.license = 'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxMDcyNjkyLVRYbFhaV0pRY205cSIsIm9yZ2FuaXphdGlvbklEIjoiMTAxMDcyNjkyIn0=';
BarcodeScanner.engineResourcePath = 'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.0.2/dist/';

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
