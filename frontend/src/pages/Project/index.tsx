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
        <h1>Projeto</h1>
    )
}

export default Project;