// Função para abrir o formulário
function abrirFormulario() {
  document.getElementById("modalCadastroProduto").style.display = "block";
}

// Função para fechar o formulário
function fecharFormulario() {
  document.getElementById("modalCadastroProduto").style.display = "none";
}

// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function (evento) {
  if (evento.target == document.getElementById("modalCadastroProduto")) {
    fecharFormulario();
  }
};

const inputBarraPesquisar = document.querySelector('#pesquisar')
inputBarraPesquisar.addEventListener('input', (evento) =>{
  const produtoDigitado = inputBarraPesquisar.value
  carregarProduto(produtoDigitado)
})

async function carregarProduto(filtro ='') {

  try{

      const url = 'https://6748c2735801f51535921495.mockapi.io/api/produtos'
      const resposta = await fetch(url)
      const dadosProdutos = await resposta.json() 

      const produtosFiltrados = dadosProdutos.filter(produto => produto.nome.includes(filtro))

      const main = document.querySelector('.grade-itens')
      main.innerHTML = ''
      produtosFiltrados.forEach(produto => {
      const estruturaHtmlProduto = `
      <section class="cartao-item">
                    <img src="${produto.imagem}" alt="Item 1" />
                    <h3>${produto.nome}</h3>
                    <p class="preco-item">R$ ${produto.preco}</p>
                    <button class="botao-comprar">Comprar</button>
                </section>
                `
        main.innerHTML += estruturaHtmlProduto

      });  
  }


  catch{
      console.log('Deu algum erro ao carregar os produtos.')
  }
}
async function adicionarProduto(){
  try{

      const nomeDigitado = document.querySelector('#nomeProduto').value
      const precoDigitado = document.querySelector('#precoProduto').value
      const urlImagem = document.querySelector('#imagemProduto').value

      if (!nomeDigitado ||!precoDigitado || !urlImagem){
        throw new Error ('Preencha todos os campos')
      }
      console.log('Cheguei nessa parte')
      const dadosProdutos = {
          nome: nomeDigitado,
          preco: precoDigitado,
          imagem: urlImagem
      }

      const url = 'https://6748c2735801f51535921495.mockapi.io/api/produtos' //'Erro ao API' - caso falte uma letra no link do API ouj o link esteja errado.
      const resposta = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(dadosProdutos)
      })

      if(!resposta.ok){
        throw new Error('Erro ao add no API')
      }

      carregarProduto()
      alert('Produto adicionado com sucesso!')
  }
  catch (erro){
    console.error('Deu algum erro ao cadastrar os produtos.', erro.message)
  }

}


carregarProduto()