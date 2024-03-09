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
};

export const getAll = async (): Promise<any | Error> => {
  try {
    const urlRelative = `/profissional`;

    const { data } = await Api.get(urlRelative);

    if (data) {
      return {
        data,
      };
    }

    return new Error("Erro ao listar registros.");
  } catch (error) {
    console.error(error);
    return (
      new Error((error as { message: string }).message) ||
      "Erro ao listar registros."
    );
  }
};

export const getById = async (id: number): Promise<IDetalheMembro | Error> => {
  try {
    const { data } = await Api.get(`/profissional/${id}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao consultar registro.");
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao consultar registro."
    );
  }
};

export const create = async (
  dados: Omit<IDetalheMembro, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<any>("/profissional/", dados);

    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar registro.");
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao criar registro."
    );
  }
};

export const updateById = async (
  id: number,
  dados: IDetalheMembro
): Promise<void | Error> => {
  try {
    await Api.put<IDetalheMembro>(`/profissional/${id}`, dados);
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao atualizar registro."
    );
  }
};

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete<IDetalheMembro>(`/profissional/${id}`);
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao apagar registro."
    );
  }
};
