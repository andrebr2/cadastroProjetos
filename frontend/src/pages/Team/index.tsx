import React, { useState, useEffect } from 'react';
//import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getAll } from 'services/api/Projetos/ProjetosService';
import '../styles.css';
import TeamList from 'components/TeamList';


function Team() {

    const navigate = useNavigate();
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
                <button onClick={() => navigate('/team/register')} className="btn btn-primary pages-btn">
                    Cadastrar time
                </button>
                <br/>
                <TeamList teams={teams} />
            </div >
        </div >

    )
}

export default Team;