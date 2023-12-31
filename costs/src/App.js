import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";


function App() {
  return (
      <Router>
          <ul>
              <Link to="/">Home</Link>
              <Link to="/company">Companhia</Link>
              <Link to="/contact">Contato</Link>
              <Link to="/newproject">Novo Projeto</Link>
          </ul>
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/company" element={<Company/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/newproject" element={<NewProject/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
