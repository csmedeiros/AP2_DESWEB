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

const preenche = (e) => {
    const id = e.id;
    const nome = e.nome;
    const nome_completo = e.nome_completo;
    const descricao = e.descricao;
    const posicao = e.posicao;
    const nascimento = e.nascimento;
    const altura = e.altura;
    
    const container_cartao = document.createElement("article");
    container_cartao.className = "cartao";
    const container_detalhes = document.createElement("article");
    container_detalhes.className = "detalhes";
    const img = document.createElement('img');
    img.src = e.imagem;
    const nome_text = document.createElement('h3');
    nome_text.textContent = nome;
    const descricao_text = document.createElement('h3');
    descricao_text.textContent = descricao;
    const nome_completo_text = document.createElement('h3');
    nome_completo_text.textContent = nome_completo;
    const nascimento_text = document.createElement('h3');
    nascimento_text.textContent = nascimento;
    const altura_text = document.createElement('h3');
    altura_text.textContent = altura;
    const posicao_text = document.createElement('h3');
    posicao_text.textContent = posicao;

    container_cartao.append(img);
    container_cartao.append(img);
    container_cartao.append(nome_text);
    container_cartao.append(posicao);

    container_detalhes.append(descricao_text);
    container_detalhes.append(nome_completo_text);
    container_detalhes.append(nascimento_text);
    container_detalhes.append(altura_text);

    document.getElementById("atleta").appendChild(container_cartao);
    document.getElementById("atleta").appendChild(container_detalhes);
};

const id_atleta = acha_cookie("id");

(async () => {
    try {
        const data = await pegar_coisas(url+id_atleta);
        const id = data.id; // assuming the id is directly available in the data object
        preenche(data);
        console.log("The id element is: ", id);
    } catch (error) {
        alert("Failed to get data from API!\n\n" + error);
    }
})();