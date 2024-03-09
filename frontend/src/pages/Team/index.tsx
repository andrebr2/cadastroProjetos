import React, { useState, useEffect } from 'react';
//import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from 'services/api/Projetos/ProjetosService';
import '../styles.css';


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
        <>
            <button onClick={() => navigate('/team/register')}>Cadastrar time</button>
        </>
    )
}

export default Team;