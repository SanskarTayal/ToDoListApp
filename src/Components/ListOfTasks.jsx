import ToDoItems from "./ToDoItems"
export default function ListOfTasks(){
    return <div className="TaskList">
    <ul className="List" type='square'>
    <ToDoItems />
    </ul>
    </div>
}