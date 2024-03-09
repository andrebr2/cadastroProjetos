import { Link, useNavigate } from 'react-router-dom'
import '../styles.css';

import { useEffect, useState } from "react";
import { getAll } from "../../services/api/Projetos/ProjetosService";

function Project() {
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
            <button onClick={() => navigate('/project/register')}>Cadastrar projeto</button>
        </>
    )
}

export default Project;
