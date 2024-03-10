import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { create } from 'services/api/Projetos/ProjetosService';

import '../styles.css';

function CadastroMembro() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = (event.target as any).score.value;
        const address = (event.target as any).score.value;
        const birthdate = (event.target as any).score.value;
        const gender = (event.target as any).score.value;
        const race = (event.target as any).score.value;
        const role = (event.target as any).score.value;


        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/member',
            data: {}
        }

        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <div className="pages-form-container">
            <div className="pages-card-bottom-container">
                <h3>Cadastro de Membro</h3>
                <form className="pages-form" onSubmit={handleSubmit}>
                    <div className="form-group pages-form-group">
                        <label htmlFor="member_name">Informe o nome</label>
                        <input type="member_name" className="form-control" id="member_name" />
                        <label htmlFor="member_address">Informe o endereço</label>
                        <input type="member_address" className="form-control" id="member_address" />
                        <label htmlFor="member_birthdate">Informe a data de aniversário</label>
                        <input type="member_birthdate" className="form-control" id="member_birthdate" />
                        <label htmlFor="member_gender">Informe o gênero</label>
                        <input type="member_gender" className="form-control" id="member_gender" />
                        <label htmlFor="member_race">Informe a raça</label>
                        <input type="member_race" className="form-control" id="member_race" />
                        <label htmlFor="member_role">Informe a especialidade</label>
                        <input type="member_role" className="form-control" id="member_role" />
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

export default CadastroMembro;