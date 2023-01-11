import "./App.css";
import { CreateNote } from "./components/CreateNote";
import { NavbarDesign } from "./components/NavbarDesign";

function App() {
  return (
    <div className="app">
      <NavbarDesign />
      <CreateNote />
    </div>
  );
}

export default App;
