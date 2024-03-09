import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Project from "pages/Project";
import Team from 'pages/Team';
import Member from "pages/Member";
import NavBar from "./components/Navbar";


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/project" element = {<Project/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/member" element = {<Member/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
