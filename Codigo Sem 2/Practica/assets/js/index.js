document.getElementById("agregaProducto").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("precioProducto").value.trim();
    const precio = document.getElementById("precioProducto").value;
    const cantidad = document.getElementById("cantidadProducto").value;
  
    if (!nombre || !precio || !precio) {
        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Por favor, complete todos los campos.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        });

        previa.setAttribute('hidden', true);
        return;
    }
    const total = precio * cantidad
    console.log(total);

    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Formulario enviado correctamente',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

//mostrar la informacion en resumen de compra:

    const p = document.createElement("p")?><<


});
