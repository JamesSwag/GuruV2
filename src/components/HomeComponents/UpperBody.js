
function UpperBody(){

    return (
        <div>
            <div className="upperBodySection">
                <img src={require("../Data/images/Other/spices.jpg")} alt=" "></img>
                <div className="upperDiv">
                    <h1>Divine Indian Food</h1>
                    <h1>For</h1>
                    <h1>Brilliant Minds</h1>
                </div>
            </div>
            <div className="banner">
                <div> 
                    <h1 style={{margin:0, color:'white', position:'relative', top:'7px', fontFamily: "Great Vibes, cursive", fontSize: '50px'}}>Our Menu</h1>
                </div>
            </div>
        </div> 
    );

}


export default UpperBody;