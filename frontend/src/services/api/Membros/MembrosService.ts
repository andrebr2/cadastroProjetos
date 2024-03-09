import { Environment } from "environment";
import { Api } from "../axios-config";


interface IListagemMembro {

    member_id: number;
    member_name: string;
    member_address: string;
    member_birthdate: Date;
    member_gender: number;
    member_race: number;
    member_role: number;
    teamId: number;

}

interface IDetalheMembro {

    member_id: number;
    member_name: string;
    member_adress: string;
    member_birthdate: Date;
    member_gender: number;
    member_race: number;
    member_role: number;
    teamId: number;

}

type TMembrosComTotalCount = {

    data: IListagemMembro[];
    totalCount: number;

}

const getAll = async (page = 1, filter = ''): Promise<TMembrosComTotalCount | Error> => {

    try {

        const urlRelative = `/member?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&name_like=${filter}`

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

const getById = async (id: number): Promise<IDetalheMembro| Error> => {

    try {

        const { data } = await Api.get(`/member/${id}`);

        if (data) {

            return data;

        }

        return new Error('Erro ao consultar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao consultar registro.');

    }

};

const create = async (dados: Omit<IDetalheMembro, 'id'>): Promise<number | Error> => {

    try {

        const { data } = await Api.post<IDetalheMembro>('/member/', dados);

        if (data) {

            return data.member_id;

        }

        return new Error('Erro ao criar registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao criar registro.');

    }

};

const updateById = async (id: number, dados: IDetalheMembro): Promise<void | Error> => {

    try {

        await Api.put<IDetalheMembro>(`/member/${id}`, dados);

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao atualizar registro.');

    }

};
const deleteById = async (id: number): Promise<void | Error> => { 

    try {

        await Api.delete<IDetalheMembro>(`/member/${id}`);


    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message) || ('Erro ao apagar registro.');

    }

};

export const MembrosService = {

    getAll,
    getById,
    create,
    updateById,
    deleteById,

};