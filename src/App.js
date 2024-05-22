import "./styles.css";
import ListOfTasks from "./Components/ListOfTasks";
import Header from "./Components/Header";
export default function App() {
  return (
    <div className="application">
      <Header />
      <ListOfTasks/>
    </div>
  );
}
