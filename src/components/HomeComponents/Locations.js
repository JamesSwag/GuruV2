

function Locations(){
    return(
        <div>
            <div className="banner">
                <div> 
                    <h1 style={{margin:0, color:'white', position:'relative', top:'7px', fontFamily: "Great Vibes, cursive", fontSize: '50px'}}>Our Locations</h1>
                </div>
            </div>
        <div id='locationsSection'>
            <div className="Boston">
                <div className="BostonInfo">
                    <h1>Boston</h1>
                    <p>D'Guru</p>
                    <p>92 Bedford Street</p>
                    <p>Boston, MA 02110</p>
                    <p>(857) 991-1345</p>
                    <h3>Hours</h3>
                    <p>Monday 11:00 am - 3:00 pm</p>
                    <p>Tuesday 11:00 am - 3:00 pm</p>
                    <p>Wednesday 11:00 am - 3:00 pm</p>
                    <p>Thursday 11:00 am - 3:00 pm</p>
                    <p>Friday 11:00 am - 3:00 pm</p>
                    <p>Saturday Closed</p>
                    <p>Sunday Closed</p>
                </div>
                <img className="BostonGuruImg" src="css/images/Other/GuruBoston.jpg" alt=""/>
            </div>
            <div className="Somerville">
                <img src="css/images/Other/SomervilleGuru.jpg" alt=""/>
                <div className="SomervilleInfo">
                    <h1>Somerville</h1>
                    <p>D'Guru</p>
                    <p>1295 Broadway</p>
                    <p>Somerville, MA 02144</p>
                    <p>(617) 718-0078</p>
                    <h3>Hours</h3>
                    <p>Monday 11:00 am - 9:00 pm</p>
                    <p>Tuesday 11:00 am - 9:00 pm</p>
                    <p>Wednesday 11:00 am - 9:00 pm</p>
                    <p>Thursday 11:00 am - 9:00 pm</p>
                    <p>Friday 11:00 am - 9:00 pm</p>
                    <p>Saturday 11:00 am - 9:00 pm</p>
                    <p>Sunday Closed</p>
                </div>
            </div>
        </div>
        </div>
    )
}



export default Locations;