import axios from "axios";

interface Estado {
    nome: string;
    sigla: string;
}

class Ibge {
    static async estados(): Promise<Estado[]> {
        const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (erro: any) {
            console.log(erro.message);
            return [];
        }
    }
}

async function listarEstados() {
    try {
        const estados = await Ibge.estados();
        estados.forEach((estado) => {
            console.log(`${estado.nome} - ${estado.sigla}`);
        });
    } catch (erro) {
        console.error("Erro ao obter os estados:", erro);
    }
}

listarEstados();