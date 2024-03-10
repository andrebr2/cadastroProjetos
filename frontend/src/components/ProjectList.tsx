

interface ProjectListProps {
  projects: any;
}

function ProjectList({ projects }: ProjectListProps )  {
  if (!projects) return
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
            </tr>
          </thead>
          <tbody>
            {projects?.map(({ name, client_name, team }: {name: any; client_name: any; team: any}) => (
              <tr>
                <td>{name}</td>
                <td>{client_name}</td>
                <td>{team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProjectList;