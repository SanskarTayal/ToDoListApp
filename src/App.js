import "./styles.css";
import ListOfTasks from "./ToDoList/ListOfTasks";
import Header from "./Header/header";
export default function App() {
  return (
    <>
    <div className="Application">
      <Header />
      <ListOfTasks />
    </div>
    </>
  );
}
