import { Environment } from "environment";
import { Api } from "../axios-config";


interface IListagemTime {

    team_id: number;
    team_name: string;
    project_id: number;

}

interface IDetalheTime {

    team_id: number;
    team_name: string;
    project_id: number;

}

type TTimesComTotalCount = {

    data: IListagemTime[];
    totalCount: number;

}

const getAll = async (page = 1, filter = ''): Promise<TTimesComTotalCount | Error> => {

    try {

        const urlRelative = `/team?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&name_like=${filter}`

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

const getById = async (id: number): Promise<IDetalheTime| Error> => {

    try {

        const { data } = await Api.get(`/team/${id}`);

        if (data) {

            return data;

        }

        return new Error('Erro ao consultar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao consultar registro.');

    }

};

const create = async (dados: Omit<IDetalheTime, 'id'>): Promise<number | Error> => {

    try {

        const { data } = await Api.post<IDetalheTime>('/team/', dados);

        if (data) {

            return data.team_id;

        }

        return new Error('Erro ao criar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao criar registro.');

    }

};

const updateById = async (id: number, dados: IDetalheTime): Promise<void | Error> => {

    try {

        await Api.put<IDetalheTime>(`/team/${id}`, dados);

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao atualizar registro.');

    }

};
const deleteById = async (id: number): Promise<void | Error> => { 

    try {

        await Api.delete<IDetalheTime>(`/team/${id}`);


    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao apagar registro.');

    }

};

export const TimesService = {

    getAll,
    getById,
    create,
    updateById,
    deleteById,

};