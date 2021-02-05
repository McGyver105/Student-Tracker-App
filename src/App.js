import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import StudentList from "./components/StudentList";
import StudentsByBlock from "./components/StudentsByBlock";
import Graduates from "./components/Graduates";
import { Link } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Link className="linkButton" to="/students">List of all students</Link>
      <Link className="linkButton" to="/students/block">Students listed by block</Link>
      <Link className="linkButton" to="/students/graduates">Graduated students</Link>
      <Router>
        <StudentList path="/students" />
        <StudentsByBlock path="/students/block" />
        <Graduates path="/students/graduates" />
      </Router>
    </div>
  );
}

export default App;
