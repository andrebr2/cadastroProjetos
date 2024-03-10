import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteById, updateById } from 'services/api/Times/TimesService';

interface TeamListProps {
  teams: any;
}

const TeamList = ({ teams }: TeamListProps) => {
  if (!teams) return <></>
  return (
    <div className='list'>
      <h3 className='list-title'>Lista de Times</h3>
      <div className='list-table-container'>
        <table className='list-table'>
          <thead className='list-header'>
            <tr>
              <th>Nome do Time</th>
              <th>Projeto</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {teams?.map(({ id, name, project }: { id: any; name: any; project: any }) => (
              <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>
                <AiFillEdit size={20} className='icon' />
                </td>
                <td>
                <AiFillDelete
                    size={20}
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        `Confirma deletar Time ${name}?`
                      );
                      if (confirmDelete) {
                        deleteById(id)
                        alert('Time deletado com sucesso!');
                      }
                    }}
                    className='icon'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TeamList;