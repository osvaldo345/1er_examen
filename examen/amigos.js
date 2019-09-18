var resultado = document.querySelector("#resultado");
var btnAgregar = document.querySelector("#calcular");

btnAgregar.addEventListener("click", amigo);


function amigo() {
    let n = 3000;
    for (var i = 2; i < n; i++) {
        if (i % 2 === 0) {
            resultado.textContent= i;

        }
        else {
        
        }
    }

}
console.log(amigo());

