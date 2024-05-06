import "./styles.css";
import ListOfTasks from "./Components/ListOfTasks"
import Header from "./Components/header";
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
