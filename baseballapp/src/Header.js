import { NavLink } from "react-router-dom";

const Header = () => {

    return (
    <header>
      <nav className="nav">
        <ul className="nav-list">
          <li key={"awards"} className="nav-item"><NavLink to="/awards">Awards</NavLink></li>
          <li key={"leaders"} className="nav-item"><NavLink to="/leaders">Leaders</NavLink></li>
          <li key={"hof"} className="nav-item"><NavLink to="/hof">HOF Voting</NavLink></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header;