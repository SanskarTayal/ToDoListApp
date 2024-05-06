import {useState} from "react";
import ClearButton from "./ClearButton";

export default function ListOfTasks() {
    const items = [{ToDoItem: "Read SpringBoot", IsCompleted: false},
        {ToDoItem: "Complete assignments", IsCompleted: false},
        {ToDoItem: "Sleep for 2 hours", IsCompleted: false},
        {ToDoItem: "Take a shower", IsCompleted: false},
        {ToDoItem: "Read SpringBoot", IsCompleted: false}];

    const [itemList, setItemList] = useState(items);

    function clearHandler() {
        const newList = itemList.slice();
        const filteredList = newList.filter((item) => {
            return !item.IsCompleted
        });
        setItemList(filteredList);
    }

    function Completed(index) {
        const newList = itemList.slice();
        newList[index].IsCompleted = !newList[index].IsCompleted;
        setItemList(newList);
    }

    return <div className="TaskList">
        <ul type='square'>
            {itemList.map((item, index) => {
                if (item.IsCompleted === false)
                    return <li onClick={() => (Completed(index))} key={index}>{item.ToDoItem}</li>
                else
                    return <li className="Strike" onClick={() => (Completed(index))}
                               key={index}>  {item.ToDoItem}   </li>
            })}
        </ul>
        < ClearButton click={clearHandler}/>
    </div>
}