import { BrowserRouter , Routes, Route } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Layoute from "../COMPONENTS/Layoute"


function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Markup
