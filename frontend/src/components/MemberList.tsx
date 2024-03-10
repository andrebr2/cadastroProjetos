
interface MemberListProps {
    members: any;
  }
  
  const MemberList = ({ members }: MemberListProps ) => {
    return (
      <div className='list'>
        <h3 className='list-title'>Lista de Membros</h3>
        <div className='list-table-container'>
          <table className='list-table'>
            <thead className='list-header'>
              <tr>
                <th>Nome do Membro</th>
                <th>Especialidade</th>
              </tr>
            </thead>
            <tbody>
              {members?.map(({ name, role }:{name: any; role: any}) => (
                <tr>
                  <td>{name}</td>
                  <td>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  export default MemberList;