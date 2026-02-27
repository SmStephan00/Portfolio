import { Routes, Route } from "react-router";

import './App.scss'


import MainPage from "./assets/pages/MainPage/MainPage";
import ReactPage from "./assets/pages/ReactPage/ReactPage";
import AiAsistent from "./assets/pages/AiAsistent/AiAsistent";

function App() {
 

  return (
    <>
    <div className="container">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/react" element={<ReactPage/>}/>
          <Route path="/AiAsistent" element={<AiAsistent/>}/>
        </Routes>
      </div>
    </>
    
  )
}

export default App
