import Accordian from "./pages/Accordian/Accordian";
import Calculator from "./pages/Calculator/Calculator";
import NoPage from "./pages/NoPage";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Welcome/>} />
              <Route path="/accordian" element={<Accordian />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
