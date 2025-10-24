document.addEventListener('DOMContentLoaded', () => {

    const btnAgregar = document.getElementById("btnAgregar");
    const btnFinalizar = document.getElementById("btnFinalizar");
    const tbody = document.getElementById("tablaData");
    const totalGeneral = document.getElementById("totalGeneral");
    let sumaTotal = 0;

    btnAgregar.addEventListener('click', () => {

        let pelicula = document.getElementById("pelicula").value.trim();
        let cantidad = document.getElementById("entradas").value.trim();
        let tipoSala = document.getElementById("tipoSala").value;
        let combo = document.getElementById("combo").checked;

        if (pelicula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Dato faltante',
                text: 'Debe ingresar el nombre de la película.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }

        if (cantidad.length === 0 || isNaN(cantidad) || cantidad <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad inválida',
                text: 'Ingrese una cantidad válida.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }

        if (tipoSala === "") {
            Swal.fire({
                icon: 'error',
                title: 'Tipo de sala faltante',
                text: 'Debe seleccionar el tipo de sala.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }

        cantidad = parseInt(cantidad);
        //sala
        let precioSala = 0;
        switch (tipoSala) {
            case "2D": precioSala = 3000; break;
            case "3D": precioSala = 4000; break;
            case "IMAX": precioSala = 5500; break;
        }
        // Cálculos
        const subtotalSala = precioSala * cantidad;
        const subtotalCombo = combo ? 2000 : 0;
        let totalCompra = subtotalSala + subtotalCombo;
        // Descuento 
        let descuento = 0;
        if (cantidad >= 4) {
            descuento = totalCompra * 0.10;
            totalCompra -= descuento;
        }

        // IVA 
        const iva = totalCompra * 0.13;
        const totalFinal = totalCompra + iva;

        //Fuentes de Uso de TD para almacenar los datos en celula de tabla 
        //https://stackoverflow.com/questions/54188200/how-to-use-html-table-td-element-in-javascript-in-different-cases
        //https://es.stackoverflow.com/questions/521284/como-hacer-para-que-un-dato-se-guarda-en-su-fila-correspondiente

        sumaTotal += totalFinal;
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${pelicula}</td>
            <td>${tipoSala}</td>
            <td>${cantidad}</td>
            <td>${combo ? 'Sí' : 'No'}</td>
            <td>₡${subtotalSala.toFixed(2)}</td>
            <td>₡${descuento.toFixed(2)}</td>
            <td>₡${iva.toFixed(2)}</td>
            <td>₡${totalFinal.toFixed(2)}</td>
        `;
        tbody.appendChild(fila);
        totalGeneral.textContent = `₡${sumaTotal.toFixed(2)}`;
        document.getElementById("pelicula").value = "";
        document.getElementById("entradas").value = "";
        document.getElementById("tipoSala").value = "";
        document.getElementById("combo").checked = false;
        document.getElementById("pelicula").focus();
    });

    btnFinalizar.addEventListener('click', () => {
        if (sumaTotal === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Sin ventas',
                text: 'Debe registrar al menos una venta antes de finalizar.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Ventas finalizadas',
            text: `El total acumulado es: ₡${sumaTotal.toFixed(2)}`,
            confirmButtonText: 'Aceptar'
        }).then(() => {
            tbody.innerHTML = "";
            totalGeneral.textContent = "₡0.00";
            sumaTotal = 0;
        });
    });
});
