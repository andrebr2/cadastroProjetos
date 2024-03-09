import axios, { AxiosRequestConfig } from 'axios';
//import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ProjetosService } from 'services/api/Projetos/ProjetosService';
import '../styles.css';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const teamName = (event.target as any).score.value;
    const project_id = (event.target as any).score.value;

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

import React, { useState, useEffect } from 'react';
import { getAll } from '../../services/api/Times/TimesService';

function Team() {

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
                <h3>Cadastro de Time</h3>
                <form className="pages-form" onSubmit={handleSubmit}>
                    <div className="form-group pages-form-group">
                        <label htmlFor="teamName">Informe o nome do time</label>
                        <input type="teamName" className="form-control" id="teamName" />
                        <label htmlFor="project_id">Informe o codigo do projeto do time</label>
                        <input type="project_id" className="form-control" id="project_id" />
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

export default Team;