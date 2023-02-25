import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import WeatherApp from "./pages/WeatherApp";
import ECommerce from "./pages/ECommerce";
import Dictionary from "./pages/Dictionary";
import Quiz from "./pages/Quiz";
import NoteBook from "./pages/NoteBook";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="weather" element={ <WeatherApp/> } />
        <Route path="ecommerce" element={ <ECommerce/> } />
        <Route path="dictionary" element={ <Dictionary/> } />
        <Route path="quiz" element={ <Quiz /> } />
        <Route path="notebook" element={ <NoteBook /> } />
        <Route path="allProjects" element={ <AllProjects /> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App