import './styles/reset.css'
import './styles/main.css'

import sun from './img/icons/sun.svg'
import moon from './img/icons/moon.svg'
import github from './img/icons/github.svg'
import linkedin from './img/icons/linkedin.svg'


function App() {
  return (
    <div>
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                    <li className="nav-list__item"><a href="./projects.html" className="nav-list__link">Projects</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Yuri</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li>
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
