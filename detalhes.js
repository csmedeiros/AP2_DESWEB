// Url da API

const url = "https://botafogo-atletas.mange.li/";


const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    console.log(dados);
    return dados;
};

const id = acha_cookie("id");
const dados = pegar_coisas(url+id);
console.log(dados);