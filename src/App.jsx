import './styles/reset.css'
import './styles/main.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Projects/> */}
      <Contacts/>
      <Footer />
    </div>
  )
}

export default App
