function sumar() {
    let valor1 = parseInt(document.getElementById('valor-1').value)
    let valor2 = parseInt(document.getElementById('valor-2').value)
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML= `
    <div class="alert alert-dark">
        <span id="resultado">El valor de la suma es igual a: ${valor1 + valor2}</span>
     </div>
    `
}

