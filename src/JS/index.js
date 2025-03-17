const btnEnviar = document.getElementById ('btn-enviar');
const inputText = document.querySelectorAll('input, textarea');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

    inputText.forEach((input, index) => {
        input.addEventListener('change', () => {
            if (input.value === ""){
                input.classList.add('obrigatorio');
                campoObrigatorio[index].classList.add('visivel');
            }else{
                input.classList.add('validado');
                input.classList.remove('obrigatorio');
                campoObrigatorio[index].classList.remove('visivel');
            }
        }); 
    }); 

    btnEnviar.addEventListener('click', (envio) => {
        inputText.forEach((input, index) => {
            if (input.value === ""){
                input.classList.add('obrigatorio');
                campoObrigatorio[index].classList.add('visivel');   
            }
            envio.preventDefault();
        });
    });
    


        

    
