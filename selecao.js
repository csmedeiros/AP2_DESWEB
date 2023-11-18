//Valida se está autenticado

if(sessionStorage.getItem("token")==null) {
    window.location.assign("index.html")
}

// Url da API

const url = "https://botafogo-atletas.mange.li/";



// Objeto para preencher cartoes dos(as) atletas

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    imagem = document.createElement('img');

    container.dataset.id = atleta.id;




    container.style.width = '15em';
    container.style.backgroundColor = 'gray';
    container.style.textAlign = 'center';
    container.style.margin = 'auto';

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;

    container.appendChild(imagem);
    container.appendChild(titulo);

    container.onclick = handleClick;

     
    document.getElementById('atletas').appendChild(container);

}

// Objeto para capturar evento de clique no cartão do(a) jogador(a)

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    document.cookie = `id=${artigo.dataset.id}`;
    window.location = 'detalhes.html?id='+artigo.dataset.id;
}

// Objeto para pegar os cookies

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}

// Função para coletar os dados dos(as) atletas

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    console.log(dados);
    return dados;
};

// Array de elementos HTML com cada um dos botões

var buttons = [document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3')];

// Função para tratar o clique nos botões, adicionando um EventListener a cada um

const clickBotao = (e) => {
    e.addEventListener('click', function() {
    const containerAtletas = document.getElementById("atletas");
    while(containerAtletas.firstChild) {
        containerAtletas.removeChild(containerAtletas.firstChild);
    }
    var valor = e.value;
    console.log(valor);
    var atletas = pegar_coisas(url+valor);
    atletas.then(data => {
        data.forEach(preenche);
    });
});
}

// Chamando a função para cada um dos botões

buttons.forEach(clickBotao)

// Variável para guardar a caixa de seleção

var select = document.querySelector('select');

// Adicionando um EventListener para a barra de seleção
select.addEventListener('change', function () {
    const containerAtletas = document.getElementById("atletas");
    while(containerAtletas.firstChild) {
        containerAtletas.removeChild(containerAtletas.firstChild);
    }
    var selecionada = this.options[this.selectedIndex];
    var valor = selecionada.value;
    console.log(valor);
    var atletas = pegar_coisas(url+valor);
    atletas.then(data => {
        data.forEach(preenche);
    });
});