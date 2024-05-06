import {Link} from "react-router-dom";
import getBeautifulDate from "../misc/getBeautifulDate";
import "../styles/NavBar.scss"

function NavBar() {
    const today = getBeautifulDate(new Date());

    return <>
        <Link className="menu-button" to="/">Home</Link>
        <Link className="menu-button" to="menu">Menu</Link>
        <div className="expander"/>
        <div>{today}</div>
    </>
}

export default NavBar;