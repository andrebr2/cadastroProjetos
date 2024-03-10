import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface ProjectListProps {
  projects: any;
}

function ProjectList({ projects }: ProjectListProps )  {
  if (!projects) return <></>
  return (
    <div className='list'>
      <h3 className='list-title'>Lista de Projetos</h3>
      <div className='list-table-container'>
        <table className='list-table'>
          <thead className='list-header'>
            <tr>
              <th>Nome do Projeto</th>
              <th>Cliente do Projeto</th>
              <th>Time do Projeto</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map(({ id, name, client_name, team }: {id:any, name: any; client_name: any; team: any}) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{client_name}</td>
                <td>{team}</td>
                <td>
                  <Link to={`/project/update/${id}`}>
                    <AiFillEdit size={20} className='icon' />
                  </Link>
                </td>
                <td>
                  <AiFillDelete size={20} className='icon' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProjectList;