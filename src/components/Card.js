import {motion} from "framer-motion";

function Card(props){
    return(
        <motion.div className="Card">
            <img src={props.url} alt=""/>
            <footer>{props.itemName}</footer>
        </motion.div>
    )
}


export default Card;