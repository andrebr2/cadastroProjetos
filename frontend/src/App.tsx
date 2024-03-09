import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/Home';

import Project from "pages/Project";
import CadastroProjeto from "pages/Project/Cadastro";

import Team from 'pages/Team';
import CadastroTeam from "pages/Team/Cadastro";

import Member from "pages/Member";
import CadastroMember from "pages/Member/Cadastro";

import NavBar from "./components/Navbar";


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project" element={<Project />} />
        <Route path="/project/register" element={<CadastroProjeto />} />

        <Route path="/team" element={<Team />} />
        <Route path="/team/register" element={<CadastroTeam />} />

        <Route path="/member" element={<Member />} />
        <Route path="/member/register" element={<CadastroMember />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
