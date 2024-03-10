import { Environment } from "environment";
import { Api } from "../axios-config";

interface IListagemTime {
  id: number;
  team_name: string;
  project?: number | String;
}

interface IDetalheTime {
  id: number;
  team_name: string;
  project?: number | String;
}

type TTimesComTotalCount = {
  data: IListagemTime[];
};

export const getAll = async (): Promise<any | Error> => {
  try {
    const urlRelative = `/time`;

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

export const getById = async (id: number): Promise<IDetalheTime | Error> => {
  try {
    const { data } = await Api.get(`/team/${id}`);

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
  dados: Omit<IDetalheTime, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<any>("/team/", dados);

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
  dados: IDetalheTime
): Promise<void | Error> => {
  try {
    await Api.put<IDetalheTime>(`/team/${id}`, dados);
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
    await Api.delete<IDetalheTime>(`/team/${id}`);
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao apagar registro."
    );
  }
};