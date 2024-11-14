const livros = [
    {
        'titulo': 'Fundamentos de Genética',
        'autor': 'Snustad',
        'anoPublicacao': '2017',
        'capa': 'https://m.media-amazon.com/images/I/61ZF7nbam6L._AC_UF894,1000_QL80_.jpg'  
    },
    {
        'titulo': 'Biologia Molecular da Célula',
        'autor': 'Bruce Alberts',
        'anoPublicacao': '2017',
        'capa': 'https://m.media-amazon.com/images/I/71b68iXRmmL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        'titulo': 'Bioquímica Médica',
        'autor': 'John W. BAYNES',
        'anoPublicacao': '2019',
        'capa': 'https://m.media-amazon.com/images/I/819zIdzYugL._SY342_.jpg'
    }
]

const divBiblioteca = document.querySelector('#biblioteca')
divBiblioteca.innerHTML = ''

livros.forEach(livro => {
    const estruturaHtmlLivro = `
    <h2>${livro.titulo}</h2>
    <ul>
        <li>Autor: ${livro.autor}</li>
        <li>Ano de Publicação: ${livro.anoPublicacao}</li>
        <li>
            <img src="${livro.capa}" alt="" height="350">
        </li>
    </ul>
    <hr>`
    divBiblioteca.innerHTML += estruturaHtmlLivro

})

carregarLivros(livros)
