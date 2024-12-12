async function carregarPersonagem(){
    const resultado = document.querySelector("#resultado")
    const id = document.querySelector("#id-personagem").value
    console.log(id)
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const request = await fetch(url)
    const response  = await request.json()
    console.log(response)
    resultado.innerHTML = `
        <div class="card">
            <img src="${response.image}" alt="personagem">
            <h2>${response.name}</h2>
            <li>${response.status}</li>
            <li>${response.species}</li>
            <li>${response.gender}</li>
        </div>
    `

}