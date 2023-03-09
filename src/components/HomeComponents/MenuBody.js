import Card from "./Card";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import mostPopular from "../Data/mostPopular";
import combos from "../Data/combos";
import appetizers from "../Data/appetizers";
import { useState } from "react";
import {motion } from "framer-motion";


function MenuBody(){
    const [move, setMove] = useState(0);
    const [moveCombo, setMoveCombo] = useState(0);
    const [moveAppetizer, setMoveAppetizer] = useState(0);
    

    function mapMenu(item){     
        return <Card key={item.id} url={item.imgURL} itemName={item.name}/>;
    }

    function moveRight(){
        const newMove = move + -436;
        setMove(newMove);
    }

    function moveLeft(){
        const newMove = move + 436;
        setMove(newMove);
    }

    function moveRightCombo(){
        const newMove = moveCombo + -436;
        setMoveCombo(newMove);
    }

    function moveLeftCombo(){
        const newMove = moveCombo + 436;
        setMoveCombo(newMove);
    }

    function moveLeftAppetizer(){
        const newMove = moveAppetizer + 436;
        setMoveAppetizer(newMove);
    }

    function moveRightAppetizer(){
        const newMove = moveAppetizer + -436;
        setMoveAppetizer(newMove);
    }


    return(
        <div className='menuBody'>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" onClick={moveLeft} style={move >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft className='icons'/> </button>
                        <div className="carousel">
                            <div>
                                <h2 style={{ marginTop: 0}}>Most Popular</h2>
                                <motion.div className="innerCarousel" animate={{x: move}} transition={{type: 'tween', duration: 0.5}}>
                                    {mostPopular.map(mapMenu)}
                                </motion.div>
                            </div>
                        </div>
                    <button className="rightArrowBtn" onClick={moveRight} style={move <= -436 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight className='icons'/> </button>
                </div>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" onClick={moveLeftCombo} style={moveCombo >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft className='icons'/> </button>
                        <div className="carousel">
                            <div>
                                <h2 style={{ marginTop: 0}}>Combos</h2>
                                <motion.div className="innerCarousel" animate={{x: moveCombo}} transition={{type: 'tween', duration: 0.5}}>
                                    {combos.map(mapMenu)}
                                </motion.div>
                            </div>
                        </div>
                    <button className="rightArrowBtn"  onClick={moveRightCombo} style={moveCombo <= -436 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight className='icons' /> </button>
                </div>
                <div className="outerCarousel">
                    <button className="leftArrowBtn" onClick={moveLeftAppetizer} style={moveAppetizer >= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleLeft className='icons'/> </button>
                        <div className="carousel">
                            <div>
                                <h2 style={{ marginTop: 0}}>Appetizers</h2>
                                <motion.div className="innerCarousel" animate={{x: moveAppetizer}} transition={{type: 'tween', duration: 0.5}}>
                                    {appetizers.map(mapMenu)}
                                </motion.div>
                            </div>
                        </div>
                    <button className="rightArrowBtn" onClick={moveRightAppetizer} style={moveAppetizer <= 0 ? {pointerEvents: 'none', opacity: 0.50}: {pointerEvents: 'all', opacity: 1.0}}> <FaArrowCircleRight className='icons'/> </button>
                </div>
        </div>
    );
}



export default MenuBody;