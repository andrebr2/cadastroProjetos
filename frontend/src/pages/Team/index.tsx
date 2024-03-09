
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
        <h1>Time</h1>
    )
}

export default Team;