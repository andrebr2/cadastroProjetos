
interface TeamListProps {
    teams: any;
  }
  
  const TeamList = ({ teams }: TeamListProps  ) => {
    return (
      <div className='list'>
        <h3 className='list-title'>Lista de Times</h3>
        <div className='list-table-container'>
          <table className='list-table'>
            <thead className='list-header'>
              <tr>
                <th>Nome do Time</th>
                <th>Projeto</th>
              </tr>
            </thead>
            <tbody>
              {teams?.map(({name, project}: {name: any; project: any}) => (
                <tr>
                  <td>{name}</td>
                  <td>{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  export default TeamList;