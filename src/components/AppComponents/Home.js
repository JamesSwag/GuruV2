import UpperBody from "../HomeComponents/UpperBody.js"
import AboutBody from "../HomeComponents/AboutBody";
import MenuBody from "../HomeComponents/MenuBody.js";
import Locations from "../HomeComponents/Locations.js";
import BottomBar from "../HomeComponents/BottomBar.js";

function Home(){
    return(
        <div>
            <UpperBody/>
            <MenuBody/>
            <AboutBody/>
            <Locations/>
            <BottomBar/>
        </div>
    );
}


export default Home;