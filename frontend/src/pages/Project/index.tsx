import axios, { AxiosRequestConfig } from 'axios';
//import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles.css';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const project_name = (event.target as any).score.value;
    const goal = (event.target as any).score.value;
    const startDAte = (event.target as any).score.value;
    const finalDate = (event.target as any).score.value;
    const price = (event.target as any).score.value;

    /*
 
     const config: AxiosRequestConfig = {
         baseURL: BASE_URL,
         method: 'POST',
         url: '/project',
         data: IDetalheProjeto
     }
 
     axios(config).then(response =>{
         navigate("/");
     })
     */
}
import { useEffect, useState } from "react";
import { getAll } from "../../services/api/Projetos/ProjetosService";

function Project() {
    const [teams, setTeams] = useState([]);

    const getTeams = async () => {
        const data = await getAll();
        setTeams(data);
    }

    useEffect(() => {
        getTeams();
    }, []);

    return (

        <div className="pages-form-container">
            <div className="pages-card-bottom-container">
                <h3>Cadastro de Projeto</h3>
                <form className="pages-form" onSubmit={handleSubmit}>
                    <div className="form-group pages-form-group">
                        <label htmlFor="project_name">Informe o nome do projeto</label>
                        <input type="project_name" className="form-control" id="project_name" />
                        <label htmlFor="goal">Informe o objetivo do projeto</label>
                        <input type="goal" className="form-control" id="goal" />
                        <label htmlFor="startDate">Informe a data inicial</label>
                        <input type="startDate" className="form-control" id="startDate" />
                        <label htmlFor="finalDate">Informe a data final</label>
                        <input type="finalDate" className="form-control" id="finalDate" />
                        <label htmlFor="price">Informe o preço do projeto</label>
                        <input type="price" className="form-control" id="price" />
                    </div>
                    <div className="pages-form-btn-container">
                        <button type="submit" className="btn btn-primary pages-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary pages-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >

    )
}

export default Project;
