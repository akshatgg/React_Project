import { useState } from "react";
import Card from "../Card/Card";
function Grid({numberofcard}){
const[board,setBoard]=useState(Array(numberofcard).fill(""));
return (
    <div className="grid">
{board.map((el,idx)=><Card key={idx}/>)}
    </div>
)
}
export default Grid;