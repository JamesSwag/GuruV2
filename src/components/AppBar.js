import { FaSearch, FaBars } from "react-icons/fa";



function AppBar(){

    return (
        <nav className="appBar">
            <div className="imgDiv">
                <img src="css/images/guru.jpg" alt=""/>
            </div>
            <button className="menuBtn" type="button"><FaBars className="hamburgerIcon" style={{fontSize: '35px'}}/></button>  
            <ul className="navList">
                <li> <a href="index.html">Our Menu</a> </li>
                <li> <a href="index.html">Locations</a> </li>
                <li> <a href="index.html">Catering</a> </li>
                <li> <a href="index.html">Gift Cards</a> </li>
                <li> <a href="index.html">Our Philosophy</a></li>
            </ul>
            <button type="button" className="searchBar"> <FaSearch style={{fontSize: '1.2rem', position: 'relative', top: '3px', color: '#53a113'}}/>  Search Our Menu </button>   
        </nav>
    );
}


export default AppBar;

