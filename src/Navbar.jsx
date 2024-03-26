import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Quotes</Link>
                </li>
                <li>
                    <Link to="/daily-facts">Daily Facts</Link>
                </li>
                <li>
                    <Link to="/body-and-mind">Body & Mind</Link>
                </li>
                <li>
                    <Link to="/playlist">Playlist</Link>
                </li>
                <li>
                    <Link to="/goals-and-habits">Goals & Habits</Link>
                </li>
                <li>
                    <Link to="/notifications">Notifications</Link>
                </li>
                <li>
                    <Link to="/surveys">Surveys</Link>
                </li>
                <li>
                    <Link to="/me-business">Me Business</Link>
                </li>
                <li>
                    <Link to="/error-stats">Error Stats</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar