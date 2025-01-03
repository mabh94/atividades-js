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

 async function carregarProduto() {
  const url = 'https://6748c2735801f51535921495.mockapi.io/api/produtos'
  const resposta = await fetch(url)
  const dadosProdutos = await resposta.json() 
  const main = document.querySelector('.grade-itens')
  dadosProdutos.forEach(produto => {
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







  carregarProduto()