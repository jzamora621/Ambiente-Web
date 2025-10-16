//Calculadora
document.getElementById("btnCalcular").addEventListener('click', () => {

    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();
    const option = document.getElementById("idOperacion").value

    if (num1.toString().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Debe ingresar el número 1.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        })
        document.getElementById("resultadoOperacion").textContent = "";

        return;
    }

    if (num2.toString().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Debe ingresar el número 2.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        })

        document.getElementById("resultadoOperacion").textContent = "";

        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let resultado = 0

    switch (option) {
        case 'suma': resultado = num1 + num2; break;
        case 'resta': resultado = num1 - num2; break;
        case 'multiplicacion': resultado = num1 * num2; break;
        case 'division': resultado = num2 !== 0 ? num1 / num2 : "División entre cero"; break;
        default: resultado = "Operación no válida";
    }

    document.getElementById("resultadoOperacion").textContent = 'Resultado: ' + resultado

    /*
    parseFloat: 90,89
    parseInt: 90
    */


})

//Selector de tema
document.addEventListener('DOMContentLoaded', () => {

    const selectorColor = document.getElementById("colorTema");

    selectorColor.addEventListener('change', () => {
        const val = selectorColor.value;
        document.body.style.background = val;
    })

})

//Evaluador de desempeño
document.getElementById("btnEvaluacion").addEventListener('click', () => {

    let nota = document.getElementById("nota").value

        if (num2.toString().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Debe ingresar el número 2.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        })

    let resultado = "";

    if (isNaN(nota)) resultado = "Por favor ingrese un número válido.";

    if (nota >= 90) resultado = "Excelente desempeño. ✅"
    else if (nota >= 70) resultado = "Aprobado.";
    else if (nota >= 50) resultado = "Debe mejorar.";
    else resultado = "Reprobado.";



    document.getElementById("listaTareas").textContent = resultado;
}
})
