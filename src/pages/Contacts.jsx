const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Baku, Azerbaijan</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:mariya.abbasova@gmail.com">
                mariya.abbasova@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
