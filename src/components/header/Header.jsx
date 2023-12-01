import './style.css'

const PDF_file_URL = 'http://localhost:5173/file_pdf.pdf'

const Header = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split('.').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Maria</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <button onClick={() => downloadFileAtURL(PDF_file_URL)}>
          <a href="#!" className="btn">
            Download CV
          </a>
        </button>
      </div>
    </header>
  )
}

export default Header
