async function cadastrarComida(){
const nomeDigitado = document.querySelector('#nome').value
const precoDigitado = document.querySelector('#preco').value
const descricaoDigitada = document.querySelector('#descricao').value
const imagemDigitada = document.querySelector('#imagem').value


const url = 'https://6748c2735801f51535921495.mockapi.io/api/cardapio'
const dadosComidaNova = {
    nome: nomeDigitado, 
    descricao: descricaoDigitada,
    preco: precoDigitado,
    img: imagemDigitada
}

const resposta = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dadosComidaNova)
})

alert('Comida cadastrada com sucesso !')

}    
