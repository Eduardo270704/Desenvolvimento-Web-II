import axios from "axios";

const cep = "12243750";
const url = `https://viacep.com.br/ws/${cep}/json`;

axios.get(url)
    .then((res) => {
        const { data } = res;
        console.log(data);
    })
    .catch((e) => {
        console.log(e.message);
    });