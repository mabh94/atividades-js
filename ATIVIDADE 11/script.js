
// Open modal
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("addTrackModal").style.display = "flex";
});

// Close modal
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("addTrackModal").style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("addTrackModal")) {
    document.getElementById("addTrackModal").style.display = "none";
  }
});

async function carregarMusicas() {
  const url = 'https://6748c2735801f51535921495.mockapi.io/api/musicas'
  const resposta = await fetch(url)
  const dadosMusicas = await resposta.json()
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''
  dadosMusicas.forEach(musica => {
      const estruturaHtmlMusica = `
      <tr>
          <td>${musica.id}</td>
          <td class="faixa">
              <img
              src="${musica.capa}"
              alt=""
              />
              <div>${musica.nome}</div>
          </td>
          <td>${musica.streams}</td>
          <td>${musica.duracao}</td>
          <td>
          <a href="#" class="play-button">▶</a>
          <a href="#" class="delete-button" onclick="deletarMusica('${musica.id}')">X</a>
          </td>
      </tr>
        `
      tbody.innerHTML += estruturaHtmlMusica
  })
}
async function deletarMusica(id){
  try{
    const url = `https://6748c2735801f51535921495.mockapi.io/api/musicas/${id}` // precisa de um erro para ele dar o sinal de alerta de erro 
    const resposta = await fetch(url,{
      method: 'DELETE'
  })
  if(resposta.ok){
    throw new Error ('Erro ao deletar uma música')
  }
  throw new Error('Erro ao deletar uma música.')
  alert('Musica deletada com sucesso!')
  carregarMusicas()
  }

  catch (erro){
    console.error(erro.message)
  }

}

async function cadastrarMusica() {
  const nomeDigitado = document.querySelector('#trackName').value
  const duracaoDigitada = document.querySelector('#trackDuration').value
  const streamsDigitado = document.querySelector('#trackStreams').value
  const capaDigitada = document.querySelector('#trackImage').value

  const dadosMusicas = {
    nome: nomeDigitado,
    duracao: duracaoDigitada,
    streams: streamsDigitado,
    capa: capaDigitada
  }

  const url = 'https://6748c2735801f51535921495.mockapi.io/api/musicas'
  const resposta = await fetch(url,{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dadosMusicas)
  })
  alert('Musica cadastrada com sucesso!')
}

carregarMusicas()