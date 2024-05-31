import './style.css'
import MariaAbbasovaCV from '../../img/Maria_Abbasova.pdf'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Maria</em>
          </strong>
          <br />a front-end developer
        </h1>
        <div className="header__text">
          <p>with a passion for learning and creating.</p>
        </div>
        <button>
          <a href={MariaAbbasovaCV} className="btn" download="MariaAbbasovaCV">
            Download CV
          </a>
        </button>
      </div>
    </header>
  )
}

export default Header
