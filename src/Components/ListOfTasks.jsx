import { useState } from "react";
import ClearButton from "./ClearButton";
export default function ListOfTasks(){
    const items = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
    
    const[itemList,setItemList] = useState(items);
    function clearHandler(){
        setItemList([<span className="Italic">Nothing to do buddy. Sleep!</span>]);
    }
    return <div className="TaskList">
    <ul type='square'>
    {itemList.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
    </ul>
    < ClearButton click={clearHandler} />
    </div>
}