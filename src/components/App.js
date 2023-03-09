import Home from "./Home.js"
import { Routes, Route } from "react-router-dom";
import MenuPage from "./MenuPage.js";
import TopBar from "./TopBar.js";
import AppBar from "./AppBar.js";


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




{/* <TopBar/>
<AppBar/>
<UpperBody/>
<MenuBody/>
<AboutBody/>
<Locations/>
<BottomBar/> */}