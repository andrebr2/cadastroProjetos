import { Environment } from "environment";
import { Api } from "../axios-config";

interface IListagemProjeto {
  id: number;
  name: string;
  goal: string;
  startDate: Date;
  finalDate: Date;
  price: number;
}

interface IDetalheProjeto {
  id: number;
  name: string;
  goal: string;
  startDate: Date;
  finalDate: Date;
  price: number;
}

type TProjetosComTotalCount = {
  data: IListagemProjeto[];
  totalCount: number;
};

export const getAll = async (): Promise<any | Error> => {
  try {
    const urlRelative = `/projeto`;

    const { data} = await Api.get(urlRelative);

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

export const getById = async (id: number): Promise<IDetalheProjeto | Error> => {
  try {
    const { data } = await Api.get(`/projeto/${id}`);

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
  dados: Omit<IDetalheProjeto, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheProjeto>("/projeto/", dados);

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
  dados: IDetalheProjeto
): Promise<void | Error> => {
  try {
    await Api.put<IDetalheProjeto>(`/projeto/${id}`, dados);
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
    await Api.delete<IDetalheProjeto>(`/projeto/${id}`);
  } catch (error) {
    console.error(error);

    return (
      new Error((error as { message: string }).message) ||
      "Erro ao apagar registro."
    );
  }
};
