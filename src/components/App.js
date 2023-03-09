import Home from "./AppComponents/Home.js"
import { Routes, Route } from "react-router-dom";
import MenuPage from "./AppComponents/MenuPage.js";
import TopBar from "./AppComponents/TopBar.js";
import AppBar from "./AppComponents/AppBar.js";


function App(){
    return(
        <>
            <TopBar/>
            <AppBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/MenuPage" element={<MenuPage/>}/>
            </Routes>
        </>
    );
}
export default App;
