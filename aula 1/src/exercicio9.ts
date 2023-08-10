import axios from "axios";

interface Regiao {
    id: number;
    sigla: string;
    nome: string;
    região: {
        id: number;
        sigla: string;
        nome: string;
    }
}

class Ibge {
    static async regioes(): Promise<Regiao[]> {
        const url = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes/4/estados";
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (erro: any) {
            console.log(erro.message);
            return [];
        }
    }
}

async function listarRegioes() {
    try {
        const regioes = await Ibge.regioes();
        console.log("Regiões do país:", regioes);
    } catch (erro) {
        console.error("Erro ao obter as regiões:", erro);
    }
}

listarRegioes();