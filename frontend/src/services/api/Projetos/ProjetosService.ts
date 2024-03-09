import { Environment } from "environment";
import { Api } from "../axios-config";


interface IListagemProjeto {

    project_id: number;
    project_name: string;
    goal: string;
    startDate: Date;
    finalDate: Date;
    price: number;

}

interface IDetalheProjeto {

    project_id: number;
    project_name: string;
    goal: string;
    startDate: Date;
    finalDate: Date;
    price: number;

}

type TProjetosComTotalCount = {

    data: IListagemProjeto[];
    totalCount: number;

}

const getAll = async (page = 1, filter = ''): Promise<TProjetosComTotalCount | Error> => {

    try {

        const urlRelative = `/project?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&name_like=${filter}`

        const { data, headers } = await Api.get(urlRelative);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count']) || Environment.LIMITE_DE_LINHAS,
            };
        }

        return new Error('Erro ao listar registros.');

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message) || ('Erro ao listar registros.');
    }

};

const getById = async (id: number): Promise<IDetalheProjeto | Error> => {

    try {

        const { data } = await Api.get(`/project/${id}`);

        if (data) {

            return data;

        }

        return new Error('Erro ao consultar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao consultar registro.');

    }

};

const create = async (dados: Omit<IDetalheProjeto, 'id'>): Promise<number | Error> => {

    try {

        const { data } = await Api.post<IDetalheProjeto>('/project/', dados);

        if (data) {

            return data.project_id;

        }

        return new Error('Erro ao criar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao criar registro.');

    }

};

const updateById = async (id: number, dados: IDetalheProjeto): Promise<void | Error> => {

    try {

        await Api.put<IDetalheProjeto>(`/project/${id}`, dados);

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao atualizar registro.');

    }

};
const deleteById = async (id: number): Promise<void | Error> => { 

    try {

        await Api.delete<IDetalheProjeto>(`/project/${id}`);


    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao apagar registro.');

    }

};

export const ProjetosService = {

    getAll,
    getById,
    create,
    updateById,
    deleteById,

};