function mostrarNumero(value) {
    document.getElementById('inputDisplay').value += value;
}

// Escuchar el evento 'keydown' en el documento
document.addEventListener('keydown', function (event) {
    const inputResultado = document.getElementById('inputDisplay');
    const inputDisplayResultado = document.getElementById('inputDisplayResultado');

    // Comprobar si la tecla presionada es un número
    if (event.key >= '0' && event.key <= '9') {
        inputResultado.value += event.key; // Añade el número al input
    } else if (event.key == 'Backspace') {
        inputResultado.value = inputResultado.value.slice(0, -1); // Elimina el último número
    } else if (event.key == 'Escape') {
        inputResultado.value = '';
    } else if (event.key == '*') {
        inputResultado.value += event.key;
    } else if (event.key == '+') {
        inputResultado.value += event.key;
    } else if (event.key == '-') {
        inputResultado.value += event.key;
    } else if (event.key == '/') {
        inputResultado.value += event.key;
    } else if (event.key == '(') {
        inputResultado.value += event.key;
    } else if (event.key == ')') {
        inputResultado.value += event.key;
    } else if (event.key == 'Enter' || event.key == '=') {
        try {
            inputDisplayResultado.value = eval(inputResultado.value); // Evalúa la operación
        } catch (error) {
            inputResultado.value = 'Error'; // Si la operación es inválida
        }
    }
});

function borrarTodo(value) {
    document.getElementById('inputDisplay').value = value;
    document.getElementById('inputDisplayResultado').value = value;
}

function borrarUltimo() {
    const display = document.getElementById('inputDisplay');
    display.value = display.value.slice(0, -1);
}

function resolver() {
    const inputResultado = document.getElementById('inputDisplay');
    const inputDisplayResultado = document.getElementById('inputDisplayResultado');
    try {
        // Evalúa la expresión matemática en el display
        inputDisplayResultado.value = eval(inputResultado.value);
    } catch (error) {
        // Maneja errores, como expresiones inválidas
        inputDisplayResultado.value = "Error";
    }
}