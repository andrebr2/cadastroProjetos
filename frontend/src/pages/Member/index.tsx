
import { useEffect } from "react";
import { getAll } from "services/api/MembrosService/MembrosService"

function Member() {

    const getMembros = async () => {
        await getAll();
    }

    useEffect(() => {
        getMembros();
    }, [])


    return (
        <h1>Membro</h1>
    )
}

export default Member;