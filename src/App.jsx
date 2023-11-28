import './styles/reset.css'
import './styles/main.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'


import github from './img/icons/github.svg'
import linkedin from './img/icons/linkedin.svg'


function App() {
  return (
    <div>
      <Navbar/>
<Header/>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    {/* <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li> */}
                </ul>

        </div>
    </main>

    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={github} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedin} alt="Link"/></a></li>
                                   </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
  </div>
  )
}

export default App
