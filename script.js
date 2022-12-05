const cores = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const botao = document.querySelector("#trocar");
const corSelecionar = document.querySelector(".cor");

// botao.addEventListener('click', function () {
//     const randonNunber = gerarNumero();
//     console.log(randonNunber)
//     document.body.style.backgroundColor = cores[randonNunber];
//     corSelecionar.textContent = cores[randonNunber];
// });

// function gerarNumero(){
//     return Math.floor(Math.random() * cores.le );
// }
botao.addEventListener('click', function(){
    let valorcor = "#";
    for (let i = 0; i < 6 ; i++){
        valorcor += cores[gerarcor()]
    }
    corSelecionar.textContent = valorcor;
    document.body.style.backgroundColor = valorcor;
})
function gerarcor(){
    return Math.floor(Math.random() * cores.length );
}