import { FaPenFancy, FaTimes, FaRegCircle} from "react-icons/fa";
function Icon({name} ){
    if(name=="cross"){
        return < FaTimes/>
    }
    else if(name=="zero"){
        return < FaRegCircle/>
    }
    else {
        return <FaPenFancy/>
    }

}
export default Icon;
