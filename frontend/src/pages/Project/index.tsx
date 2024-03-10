import { useNavigate } from 'react-router-dom'
import '../styles.css';

import { useEffect, useState } from "react";
import { getAll } from "../../services/api/Projetos/ProjetosService";
import ProjectList from '../../components/ProjectList';

function Project() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const data = await getAll();
        setProjects(data);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (

        <div className="pages-form-container">
            <div className="pages-card-bottom-container">
                <button onClick={() => navigate('/project/register')} className="btn btn-primary pages-btn">
                    Cadastrar projeto
                </button>
                <br/>
                <ProjectList projects={projects} />
            </div >
        </div >

    )
}

export default Project;
