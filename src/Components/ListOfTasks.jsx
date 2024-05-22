import {useState} from "react";

import RemoveTaskButton from "./RemoveTaskButton";

export default function ListOfTasks() {
    const items = [{toDoItem: "Read SpringBoot", isCompleted: false},
        {toDoItem: "Complete assignments", isCompleted: false},
        {toDoItem: "Sleep for 2 hours", isCompleted: false},
        {toDoItem: "Take a shower", isCompleted: false},
        {toDoItem: "Read SpringBoot", isCompleted: false}];

    const [itemList, setItemList] = useState(items);

    function toggleRemovingStrikedTasks() {
        setItemList(itemList.slice().filter((item) =>  !item.isCompleted));
        
    }

    function toggleTaskCompletionStatus(index) {
        const newList = itemList.slice();
        newList[index].isCompleted = !newList[index].isCompleted;
        setItemList(newList);
    }

    return <div className="task-list">
        <ul type='square'>
            {itemList.map((item, index) => {
                if (item.isCompleted === false)
                    return <li onClick={() => (toggleTaskCompletionStatus(index))} key={index}>{item.toDoItem}</li>
                else
                    return <li className="striked-item" onClick={() => (toggleTaskCompletionStatus(index))}
                               key={index}>  {item.toDoItem}   </li>
            })}
        </ul>
        < RemoveTaskButton clearStrikedContent={toggleRemovingStrikedTasks}/>
    </div>
}