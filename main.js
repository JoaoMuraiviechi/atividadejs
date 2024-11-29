const form = document.getElementById('Formulario');
const primeiroNumero = document.getElementById('primeiro');
const segundoNumero = document.getElementById('segundo');
const mensagemSucesso = document.querySelector('.sucesso');
const mensagemError = document.querySelector ('.error');

function validaNumeros(a, b){
    return b > a;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const a = parseFloat(primeiroNumero.value);
    const b = parseFloat(segundoNumero.value);

    const formValido = validaNumeros(a, b);
    if (formValido){
        mensagemSucesso.textContent = `O número: ${b} é maior que o número: ${a}. Formulário enviado com sucesso!`;
        mensagemSucesso.style.display = 'block';
        mensagemError.style.display = 'none';

        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        mensagemError.textContent = `O número: ${b} é menor que o número: ${a}. Formulário inválido!`;
        mensagemError.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }

});