import './Header.css'

const Header = () => {
    return (
        <header className="header">
        <div className="logo-group">
          <a href='/'><div className="logo-box">NW</div></a>
          <div>
            <div className="logo-title">Neurowits</div>
            <div className="logo-subtitle">IEP Support · Tutoring · Parental Insight</div>
          </div>
        </div>
        <button className="mobile-menu-button">☰</button>
      </header>
    )
}

export default Header