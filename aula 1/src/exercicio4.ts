function item(entrada: string): string {
    return `\t<li>${entrada}</li>\n`;
}

function listar(elementos: string[]): string {
    const r = elementos.reduce((soma, elemento) => {
        return soma + item(elemento);
    }, "");
    return `<ul>\n${r}</ul>\n`;
}

/*const frutas: string[] = ["Manga", "Laranja", "Maça", "Uva"];
const resultado: string = listar(frutas);
console.log(resultado);*/

export default listar;