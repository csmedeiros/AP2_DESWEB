// Url da API

const url = "https://botafogo-atletas.mange.li/";

//Valida se está autenticado

if(sessionStorage.getItem("token")==null) {
    window.location.reload();
    window.location.assign('index.html')
}

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

function voltar() {
    window.location.assign("selecao.html")
}

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
    img.className = "imagem";
    const nome_text = document.createElement('h3');
    nome_text.className = "nome";
    nome_text.textContent = nome;
    const descricao_text = document.createElement('h3');
    descricao_text.className = "descricao";
    descricao_text.textContent = descricao;
    const nome_completo_text = document.createElement('h3');
    nome_completo_text.className = "nome_completo";
    nome_completo_text.textContent = nome_completo;
    const nascimento_text = document.createElement('h3');
    nascimento_text.className = "nascimento";
    nascimento_text.textContent = nascimento;
    const altura_text = document.createElement('h3');
    altura_text.className = "altura";
    altura_text.textContent = altura;
    const posicao_text = document.createElement('h3');
    posicao_text.className = "posicao";
    posicao_text.textContent = posicao;
    const botao_voltar = document.createElement('button');
    botao_voltar.className = "voltar";
    botao_voltar.textContent = "Voltar";
    const rodape = document.createElement("h1");
    rodape.textContent = "Atletas Botafogo"

    botao_voltar.addEventListener("click", function() {
        voltar();
    });

    container_cartao.append(img);
    container_cartao.append(img);
    container_cartao.append(nome_text);
    container_cartao.append(posicao_text);

    container_detalhes.append(descricao_text);
    container_detalhes.append(nome_completo_text);
    container_detalhes.append(nascimento_text);
    container_detalhes.append(altura_text);
    container_detalhes.append(botao_voltar);
  
    document.getElementById("atleta").append(container_cartao);
    document.getElementById("atleta").append(container_detalhes);
    
};
const id_atleta = acha_cookie("id");

(async () => {
    try {
        const data = await pegar_coisas(url+id_atleta);
        const id = data.id; // assuming the id is directly available in the data object
        preenche(data);
        console.log("The id element is: ", id);
    } catch (error) {
        alert(error);
    }
})();