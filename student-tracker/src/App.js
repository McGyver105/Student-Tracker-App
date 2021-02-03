import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import StudentList from "./components/StudentList";
import StudentsByBlock from "./components/StudentsByBlock";
import Graduates from "./components/Graduates";

function App() {
  return (
    <div className="App">
      <Header />
      {/*add buttons to pages*/}
      <Router>
        <StudentList path="/students" />
        <StudentsByBlock path="/students/block" />
        <Graduates path="/students/graduates" />
      </Router>
    </div>
  );
}

export default App;
