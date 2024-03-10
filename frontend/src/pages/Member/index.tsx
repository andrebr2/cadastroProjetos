import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getAll } from 'services/api/Projetos/ProjetosService';

import '../styles.css';
import MemberList from 'components/MemberList';

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

        <div className="pages-form-container">
            <div className="pages-card-bottom-container">
                <button onClick={() => navigate('/member/register')} className="btn btn-primary pages-btn">
                    Cadastrar membro
                </button>
                <br/>
                <MemberList members={membros} />
            </div >
        </div >

    )
}

export default Member;