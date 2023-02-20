import Card from "./Card";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import menuItems from "./Data/menuItems";
import { useState } from "react";
import {motion } from "framer-motion";


function MenuBody(){
    const [move, setMove] = useState(0);

    function mapMenu(item){     
        return <Card key={item.id} url={item.imgURL} itemName={item.name} move={false}/>;
    }

    function moveRight(){
        const newMove = move + -436;
        setMove(newMove);
    }

    function moveLeft(){
        const newMove = move + 436;
        setMove(newMove);
    }

    return(
        <div className='menuBody'>
            <h1 className="ourMenu">Our Menu</h1>
            <div>
                <h2 style={{color: 'white', paddingLeft: '12rem'}}>Most Popular</h2>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" onClick={moveLeft} style={move >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft style={{fontSize: '35px'}}/> </button>
                        <div className="carousel">
                            <motion.div className="innerCarousel" animate={{x: move}} transition={{type: 'tween', duration: 0.5}}>
                                {menuItems.map(mapMenu)}
                            </motion.div>
                        </div>
                    <button className="rightArrowBtn" onClick={moveRight} style={move <= -2616 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight style={{fontSize: '35px'}}/> </button>
                </div>
            </div>
            <div>
                <h2 style={{color: 'white'}}>Combos</h2>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" style={move >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft style={{fontSize: '35px'}}/> </button>
                        <div className="carousel">
                            <motion.div className="innerCarousel">
                                {menuItems.map(mapMenu)}
                            </motion.div>
                        </div>
                    <button className="rightArrowBtn"  style={move <= -2616 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight style={{fontSize: '35px'}}/> </button>
                </div>
            </div>
            <div>
                <h2 style={{color: 'white'}}>Appetizers</h2>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" style={move >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft style={{fontSize: '35px'}}/> </button>
                        <div className="carousel">
                            <motion.div className="innerCarousel">
                                {menuItems.map(mapMenu)}
                            </motion.div>
                        </div>
                    <button className="rightArrowBtn"  style={move <= -2616 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight style={{fontSize: '35px'}}/> </button>
                </div>
            </div>
        </div>
    );

}



export default MenuBody;