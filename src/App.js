import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Property from "./pages/Property";
import Crypto from "./pages/Crypto";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="property" element={ <Property/> } />
        <Route path="crypto" element={ <Crypto/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App