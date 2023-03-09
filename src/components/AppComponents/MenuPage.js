import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";
import combos from "../Data/combos.js";
import appetizers from "../Data/appetizers.js";
import biryanis from "../Data/Biryanis.js";
import allItems from '../Data/all-items.js';
import parathas from '../Data/parathas';
import entrees from '../Data/entrees.js';
import beverages from '../Data/beverages.js';
import desserts from '../Data/desserts.js';
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";


function MenuPage(props) {


    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const barBtn = useRef();
    const [itemList, setItemList] = useState(allItems);
    const [menuName, setMenuName] = useState("All Items");
    const [buttonColors, setButtonColors] = useState({ allItems: "gold", combo: "white", appetizer: "white", biryani: "white", paratha: "white", entree: "white", beverage: "white", dessert: "white" });
    const [mouseOver, setMouseOver] = useState({ allItems: true, combo: false, appetizer: false, biryani: false, paratha: false, entree: false, beverage: false, dessert: false });
    const [iconColor, setIconColor] = useState("white");
    const [sideBarSize, setSideBarSize] = useState({ sideBarWidth: windowSize.current[0] < 1000 ? "450px" : "300px", bool: false, visibility: "visible", color: "white", itemDisplayWidth: "75vw" });

    //Change to functions
    function changeToAllItems() {
        setItemList(allItems);
        setMenuName('All Items');
        setButtonColors({ allItems: "gold", combo: "white", appetizer: "white", biryani: "white", paratha: "white", beverage: "white", dessert: "white" });
    }

    function changeToCombos() {
        setItemList(combos);
        setMenuName('Combos');
        setButtonColors({ allItems: "white", combo: "gold", appetizer: "white", biryani: "white", paratha: "white", beverage: "white", dessert: "white" });
    }

    function changeToAppetizers() {
        setItemList(appetizers);
        setMenuName('Appetizers');
        setButtonColors({ allItems: "white", combo: "white", appetizer: "gold", biryani: "white", paratha: "white", beverage: "white", dessert: "white" });
    }

    function changeToBiryani() {
        setItemList(biryanis);
        setMenuName('Biryanis');
        setButtonColors({ combo: "white", appetizer: "white", biryani: "gold" });
    }

    function changeToParatha() {
        setItemList(parathas);
        setMenuName("Parathas");
        setButtonColors({ allItems: "white", combo: "white", appetizer: "white", biryani: "white", paratha: "gold", beverage: "white", dessert: "white" });
    }

    function changeToEntree() {
        setItemList(entrees);
        setMenuName("Entrees");
        setButtonColors({ allItems: "white", combo: "white", appetizer: "white", biryani: "white", paratha: "white", entree: "gold", beverage: "white", dessert: "white" });
    }

    function changeToBeverages() {
        setItemList(beverages);
        setMenuName("Beverages");
        setButtonColors({ allItems: "white", combo: "white", appetizer: "white", biryani: "white", paratha: "white", entree: "white", beverage: "gold", dessert: "white" });
    }

    function changeToDesserts() {
        setItemList(desserts);
        setMenuName("Desserts");
        setButtonColors({ allItems: "white", combo: "white", appetizer: "white", biryani: "white", paratha: "white", entree: "white", beverage: "white", dessert: "gold" });
    }

    //Mouse over functions
    function handleMouseOverAllItems() {
        setMouseOver({ allItems: true, combo: false, appetizer: false, biryani: false, paratha: false, beverage: false, dessert: false });
    }

    function handleMouseOverCombo() {
        setMouseOver({ allItems: false, combo: true, appetizer: false, biryani: false, paratha: false, beverage: false, dessert: false });
    }

    function handleMouseOverAppetizer() {
        setMouseOver({ allItems: false, combo: false, appetizer: true, biryani: false, paratha: false, beverage: false, dessert: false });
    }

    function handleMouseOverBiryani() {
        setMouseOver({ allItems: false, combo: false, appetizer: false, biryani: true, paratha: false, beverage: false, dessert: false });
    }

    function handleMouseOverParatha() {
        setMouseOver({ allItems: false, combo: false, appetizer: false, biryani: false, paratha: true, beverage: false, dessert: false });
    }

    function handleMouseOverBeverage() {
        setMouseOver({ allItems: false, combo: false, appetizer: false, biryani: false, paratha: false, beverage: true, dessert: false });
    }

    function handleMouseOverDessert() {
        setMouseOver({ allItems: false, combo: false, appetizer: false, biryani: false, paratha: false, beverage: false, dessert: true });
    }

    function handleMouseOverEntree() {
        setMouseOver({ allItems: false, combo: false, appetizer: false, biryani: false, paratha: false, entree: true, beverage: false, dessert: false });
    }

    function handleMouseOverBars() {
        setIconColor("gold")
    }

    //Mouse out functions
    function handleMouseOutAllItems() {
        setMouseOver(mouseOver.allItems = false);
    }

    function handleMouseOutCombo() {
        setMouseOver(mouseOver.combo = false);
    }

    function handleMouseOutAppetizer() {
        setMouseOver(mouseOver.appetizer = false);
    }

    function handleMouseOutBiryani() {
        setMouseOver(mouseOver.biryani = false);
    }

    function handleMouseOutParatha() {
        setMouseOver(mouseOver.paratha = false);
    }

    function handleMouseOutBeverage() {
        setMouseOver(mouseOver.beverage = false);
    }

    function handleMouseOutDessert() {
        setMouseOver(mouseOver.dessert = false);
    }

    function handleMouseOutEntree() {
        setMouseOver(mouseOver.entree = false);
    }

    function handleMouseOutBars() {
        setIconColor("white");
    }

    //On Click Function for Bars
    function changeSideBar() {

        let sideBarRefWidth = barBtn.current.offsetWidth;
        let sideBarRefWidthXl = 300 + "px";

        if (sideBarRefWidth === 32) {
            sideBarRefWidth = sideBarRefWidth + 30 + "px";
        } else if (sideBarRefWidth === 62) {
            sideBarRefWidth = sideBarRefWidth + 6 + "px";
            sideBarRefWidthXl = 450 + "px";
        }

        if (!sideBarSize.bool) {
            setSideBarSize({ sideBarWidth: sideBarRefWidth, bool: true, visibility: "hidden", color: "#53a113", itemDisplayWidth: "95vw" });
        } else {
            setSideBarSize({ sideBarWidth: sideBarRefWidthXl, bool: false, visibility: "visible", color: "white", itemDisplayWidth: "83vw" });
        }

    }

    function mapItem(item) {
        return (
            <Card className='menuCard' key={item.id}>
                <Card.Img src={item.imgURL} />
                <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Title className='cardTitle'>{item.name}</Card.Title>
                        <Card.Text className='cardPrice'>{item.price}</Card.Text>
                    </div>
                    <Card.Text className='cardText'>{item.info}</Card.Text>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Card.Text style={{ color: 'red' }}>{item.location}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    };

    return (
        <div>
            <div className="menuPage">
                <div className="sideBar" style={{ width: sideBarSize.sideBarWidth, flexShrink: '0' }}>
                    <div className="top" style={{ display: 'flex', gap: '1rem', width: '100%', alignItems: 'center' }}>
                        <button ref={barBtn} onClick={changeSideBar}> <FaBars onMouseOver={handleMouseOverBars} onMouseOut={handleMouseOutBars} style={{ color: iconColor }} /> </button>
                        <h3 style={{ margin: 0, visibility: sideBarSize.visibility }}>Categories</h3>
                    </div>
                    <ul className="menuItems">
                        <li><button onClick={changeToAllItems} onMouseOver={handleMouseOverAllItems} onMouseOut={handleMouseOutAllItems} style={{ color: mouseOver.allItems ? "gold" : buttonColors.allItems, visibility: sideBarSize.visibility }}>All Items</button></li>
                        <li><button onClick={changeToCombos} onMouseOver={handleMouseOverCombo} onMouseOut={handleMouseOutCombo} style={{ color: mouseOver.combo ? "gold" : buttonColors.combo, visibility: sideBarSize.visibility }}>Combos</button></li>
                        <li><button onClick={changeToAppetizers} onMouseOver={handleMouseOverAppetizer} onMouseOut={handleMouseOutAppetizer} style={{ color: mouseOver.appetizer ? "gold" : buttonColors.appetizer, visibility: sideBarSize.visibility }}>Appetizers</button></li>
                        <li><button onClick={changeToBiryani} onMouseOver={handleMouseOverBiryani} onMouseOut={handleMouseOutBiryani} style={{ color: mouseOver.biryani ? "gold" : buttonColors.biryani, visibility: sideBarSize.visibility }}>Biryanis</button></li>
                        <li><button onClick={changeToParatha} onMouseOver={handleMouseOverParatha} onMouseOut={handleMouseOutParatha} style={{ color: mouseOver.paratha ? "gold" : buttonColors.paratha, visibility: sideBarSize.visibility }}>Parathas</button></li>
                        <li><button onClick={changeToEntree} onMouseOver={handleMouseOverEntree} onMouseOut={handleMouseOutEntree} style={{ color: mouseOver.entree ? "gold" : buttonColors.entree, visibility: sideBarSize.visibility }}>Entrees</button></li>
                        <li><button onClick={changeToBeverages} onMouseOver={handleMouseOverBeverage} onMouseOut={handleMouseOutBeverage} style={{ color: mouseOver.beverage ? "gold" : buttonColors.beverage, visibility: sideBarSize.visibility }}>Beverages</button></li>
                        <li><button onClick={changeToDesserts} onMouseOver={handleMouseOverDessert} onMouseOut={handleMouseOutDessert} style={{ color: mouseOver.dessert ? "gold" : buttonColors.dessert, visibility: sideBarSize.visibility }}>Desserts</button></li>
                    </ul>
                </div>
                <div className="itemDisplay">
                    <div className='greetingsHeader' style={{ height: '4rem', backgroundColor: '#f9faf7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ color: 'grey', margin: '0' }}>Good Evening</p>
                    </div>
                    <div className='menuNameHeader' style={{ height: '5rem', borderTop: 'solid', borderBottom: 'solid', borderColor: 'lightgray', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <h1 style={{ margin: '0px 20px 0px 20px', color: 'green', fontWeight: '800' }}>{menuName}</h1>
                        <span style={{ color: 'red' }}>Prices vary based on location</span>
                    </div>
                    <div className='menuDisplay' style={{ padding: '0 0 3rem 3rem', display: 'flex', flexWrap: 'wrap' }}>
                        {itemList.map(mapItem)}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default MenuPage;


