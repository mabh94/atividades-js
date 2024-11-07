function adicionarItem(){
    const item = document.querySelector('#item').value
    const lista = document.querySelector('#lista')
    lista.innerHTML += `<li>${item}</li>`
    
   
}