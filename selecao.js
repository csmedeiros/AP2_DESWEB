//Valida se está autenticado

if(sessionStorage.getItem("token")==null) {
    window.location.assign("index.html")
}
// Url da API

const url = "https://botafogo-atletas.mange.li";

// Objeto para preencher cartoes dos(as) atletas

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    imagem = document.createElement('img');

    container.dataset.id = atleta.id;
    container.dataset.nome_completo = atleta.nome_completo;


    container.style.width = '15em';
    container.style.backgroundColor = 'gray';
    container.style.textAlign = 'center';
    container.style.margin = 'auto';

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;

    container.appendChild(imagem);
    container.appendChild(titulo);

    container.onclick = handleClick;

    document.body.appendChild(container);

}

// Função para capturar evento de clique no cartão do(a) jogador(a)

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    sessionStorage.setItem('id', artigo.dataset.id);
    sessionStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    sessionStorage.setItem('nascimento', artigo.dataset.nascimento);
    sessionStorage.setItem('altura', artigo.dataset.altura);

    console.log(acha_cookie('nome_completo'));
    console.log(localStorage.getItem('id'));
    console.log(JSON.parse(localStorage.getItem('dados')).altura);

    window.location = `outra.html?id=${artigo.dataset.id}&nome_completo=${artigo.dataset.nome_completo}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

pegar_coisas('${url}/all').then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
);