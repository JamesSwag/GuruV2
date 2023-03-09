import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


function AppBar(){

    const [textColor, setTextColor] = useState({home: 'white', ourMenu: 'white', ourPhilosphy: 'white', locations: 'white', catering: 'white'});


    return (
        <nav className="appBar">
            <div className="imgDiv">
                <img src="css/images/Other/guru.jpg" alt=""/>
            </div>
            <button className="menuBtn" type="button"><FaBars className="hamburgerIcon" style={{fontSize: '35px'}}/></button>  
            <ul className="navList">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/MenuPage">Our Menu</Link> </li>
                <li> <a href="/">Our Philosophy</a> </li>
                <li> <a href="/">Locations</a> </li>
                <li> <a href="/">Catering</a></li>
            </ul>
            <button type="button" className="searchBar"> <FaSearch style={{fontSize: '1.2rem', position: 'relative', top: '3px', color: '#53a113'}}/>  Search Our Menu </button>   
        </nav>
    );
}


export default AppBar;

