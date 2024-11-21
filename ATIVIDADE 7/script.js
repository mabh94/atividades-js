async function buscarCep() {
    const cepDigitado = document.querySelector('#cep').value
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`
    const resposta = await fetch(url)
    const informacoesCep = await resposta.json()

    console.log(informacoesCep)

    const inputLogradouro = document.querySelector('#logradouro')
    const inputBairro = document.querySelector('#bairro')
    const inputCidade = document.querySelector('#cidade')
    const inputEstado = document.querySelector('#estado')
    
    inputLogradouro.value = informacoesCep.logradouro   
    inputBairro.value = informacoesCep.bairro
    inputCidade.value = informacoesCep.localidade
    inputEstado.value = informacoesCep.estado 
}