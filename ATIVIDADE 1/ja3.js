function adicionarItem(){
    const valorItem = document.querySelector('#item').value
    const listaItens = document.querySelector('#ListaMercardo')
    listaItens.innerHTML += `<li>${valorItem}</li>`

}