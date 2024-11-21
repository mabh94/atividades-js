async function carregarDadosGato() {
    const url = 'https://api.thecatapi.com/v1/images/search'
    const resposta = await fetch(url)
    const informacoesGato = await resposta.json()
    console.log(informacoesGato)

    const div = document.querySelector('#dados-gato')
    div.innerHTML = ''
    informacoesGato.forEach(dadosGato => {
        const estruturaHTMLGato = `
        <p>Altura: ${dadosGato.height} </p>
        <p>Largura: ${dadosGato.width} </p>
        <img src="${dadosGato.url}" alt="">
        `
        div.innerHTML += estruturaHTMLGato
    });
    
}

carregarDadosGato()
