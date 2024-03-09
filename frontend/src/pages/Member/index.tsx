import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from 'services/api/Projetos/ProjetosService';

import '../styles.css';

function Member() {

    const [membros, setMembros] = useState([]);
    const navigate = useNavigate();

    const getMembros = async () => {
        let data = await getAll();
        setMembros(membros);
    }

    useEffect(() => {
        getMembros();
    }, [])


    return (
        <>
            <button onClick={() => navigate('/member/register')}>Cadastrar membro</button>
        </>
    )
}

export default Member;