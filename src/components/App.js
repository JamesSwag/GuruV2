import AppBar from "./AppBar.js"
import UpperBody from "./UpperBody.js"
import TopBar from "./TopBar";
import AboutBody from "./AboutBody";
import MenuBody from "./MenuBody.js";
import Locations from "./Locations.js";

function App(){
    return(
        <div>
            <TopBar/>
            <AppBar/>
            <UpperBody/>
            <AboutBody/>
            <MenuBody/>
            <Locations/>
        </div>
    );
}
export default App;