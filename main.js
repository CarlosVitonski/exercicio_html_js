
const form = document.getElementById('form-exercicio');
const x = document.getElementById('valorX');
const y = document.getElementById('valorY');

form.addEventListener('submit', function (e) {

        e.preventDefault();

        const mensagemSucesso = `O Valor de X: <b>${x.value}</b> é menor que o valor de Y: <b>${y.value}</b>`;
        const valorX = parseFloat(x.value);
        const valorY = parseFloat(y.value);
        
        if (valorX < valorY) {

            const sucesso = document.querySelector('.success');
            sucesso.innerHTML = mensagemSucesso;
            sucesso.style.display = "block";
            x.value = '';
            y.value = '';
            y.classList.remove('error');
            document.querySelector('.errado').style.display = "none";

        } else {
            document.querySelector('.errado').style.display = "block";
            y.classList.add('error');
            y.value = '';
        }
    }
);