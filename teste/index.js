const url = "https://botafogo-atletas.mange.li/";



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

    //container.onclick = handleClick;

    document.body.appendChild(container);

}


const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

var atletas = pegar_coisas(url+"all");
console.log(atletas)

atletas.then(data => {
    data.forEach(preenche);
});