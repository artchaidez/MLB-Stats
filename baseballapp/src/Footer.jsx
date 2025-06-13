import { Link } from "react-router";

const Footer = () => {
    return (
    <footer className="footer">
        <Link to="https://www.fangraphs.com/" className="footer-link">Fangraphs</Link>
        <Link to="https://baseballsavant.mlb.com/" className="footer-link">Baseball-Savant</Link>
    </footer>
    )
}

export default Footer;