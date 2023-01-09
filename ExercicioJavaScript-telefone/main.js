
//Adicionar o valor teclado no input
function updateInput(event) {
    //Valor Teclado
    console.log(textBoxTel.value);

    //Add valor teclado no input
    textBoxTel.value += event.currentTarget.value;

}

//Atribuir uma função para o atribudo onclick para uma lista de elementos
function defineOnClickButtons(listButtons) {

    for (let index = 0; index < listButtons.length; index++) {
        listButtons[index].onclick = updateInput;
    }
}

//Input de telefone
var textBoxTel = document.querySelector("input[type=tel]");

//Todas as teclas
var buttons = document.querySelectorAll("input[type=button]");

defineOnClickButtons(buttons);
