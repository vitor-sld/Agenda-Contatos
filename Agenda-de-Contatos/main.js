const formContatos = document.getElementById('form-contatos');
const tbody = document.querySelector('tbody');
const quantidadeContatos = document.getElementById('quantidade-contato');
let nomeContatos = [];
let numeroContatos = [];
let linhas = ``;
let contador = 0;

formContatos.addEventListener('submit', function (e) {
    e.preventDefault();
    
    addLinhas();
    atualizarAgenda();
    
})

function addLinhas() {
    
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const selectContato = document.getElementById('op-contato');
    
    if(!nomeContatos.includes(inputNomeContato.value)){
        if(!numeroContatos.includes(inputNumeroContato.value)){
    nomeContatos.push(inputNomeContato.value);
    numeroContatos.push(inputNumeroContato.value)

    let linhaCadastro = ``
    linhaCadastro += `<tr>`;
    linhaCadastro += `<td> ${inputNomeContato.value}</td>`;
    linhaCadastro += `<td> ${inputNumeroContato.value}</td>`;
    linhaCadastro += `<td> ${selectContato.value}</td>`
    linhaCadastro += `<td><a href='tel: ${inputNumeroContato.value}'><img src="img/telefone.png" alt="ícone de telefone"></a></td>`
    linhaCadastro += `</tr>`
    linhas += linhaCadastro
    atualizarQuantidades();
}else{ alert(`O número ${inputNumeroContato.value} já está cadastrado`)}
}else{
    alert(`O ${inputNomeContato.value} já está cadastrado`)
}
}


function atualizarQuantidades() {
    contador = contador + 1;
}

function atualizarAgenda() {
    quantidadeContatos.innerHTML = contador;
    tbody.innerHTML = linhas;
}