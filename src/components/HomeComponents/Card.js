import {motion} from "framer-motion";

function Card(props){
    return(
        <motion.div className="Card">
            <img src={props.url} alt=""/>
            <div>
                <footer>{props.itemName}</footer>
            </div>
        </motion.div>
    )
}


export default Card;