import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface MemberListProps {
    members: any;
  }
  
  const MemberList = ({ members }: MemberListProps ) => {
    if (!members) return <></>;
    return (
      <div className='list'>
        <h3 className='list-title'>Lista de Membros</h3>
        <div className='list-table-container'>
          <table className='list-table'>
            <thead className='list-header'>
              <tr>
                <th>Nome do Membro</th>
                <th>Especialidade</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {members?.map(({ name, role }:{name: any; role: any}) => (
                <tr>
                  <td>{name}</td>
                  <td>{role}</td>
                  <td>
                  <AiFillEdit size={20} className='icon' />
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
  export default MemberList;