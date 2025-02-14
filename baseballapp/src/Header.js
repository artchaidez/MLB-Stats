import { NavLink } from "react-router-dom";

const Header = () => {

    return (
    <header>
      <nav className="nav-list">
        <ul className="list">
          <li class="nav-item"><NavLink to="/awards">Awards</NavLink></li>
          <li class="nav-item"><NavLink to="/leaders">Leaders</NavLink></li>
          <li class="nav-item"><NavLink to="/hof">HOF Voting</NavLink></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header;