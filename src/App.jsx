import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFount"
import Works from "./pages/Works/Works"
import Navigation from "./components/Navigation/Navigation"
import Test from "./pages/Test/Test"
import Gallery from "./pages/Gallery/Gallery"
import Footer from "./components/Footer/Footer"
import SectionById from "./pages/Section/SectionById"
import GalleryDetail from "./pages/Gallery/components/GalleryDetails"

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/works" element={<Works />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/test" element={<Test />} />
        <Route path="/section/:id" element={<SectionById />} />
        <Route path="/galerija/:id" element={<GalleryDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
