async function carregarCardapio(){
    const url = 'https://6748c2735801f51535921495.mockapi.io/api/cardapio'
    const resposta = await fetch(url)
    const dadosCardapio = await resposta.json()
    const sectionMenu = document.querySelector('#menu')
    dadosCardapio.forEach(comida => {
        const estruturaHTMLComida = `
<div class="item">
    <img src="${comida.img}" alt="">
    <div class="details">
        <h2> ${comida.nome}</h2>
        <p> ${comida.descricao}</p>
        <span> R$ ${comida.preco}</span>
    </div>
</div>`
    sectionMenu.innerHTML += estruturaHTMLComida
    })
}

carregarCardapio()