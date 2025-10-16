
document.getElementById("loginForm").addEventListener('submit', function (e) {

    //Previene el comportamiento por defecto del componente, en este caso, loginForm
    e.preventDefault();

    /*
    "     Tengo texto   "
    "Tengo Texto
    */

    const username = document.getElementById("usuario").value.trim();
    const password = document.getElementById("contrasenna").value.trim();

    if (username.length == 0) {
        // alert("Debe ingresar un usuario")

        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Debe ingresar un usuario válido.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        })

        return;
    }

    if (!password) {
        Swal.fire({
            icon: 'error',
            title: 'Datos faltantes',
            text: 'Debe ingresar una contraseña válida.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true
        })
        return;
    }

    //Hace login

    //Redirigir a home
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Inicio de sesión exitoso. Bienvenido: ' + username,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
    })

    setTimeout(() => {
        window.location.href = "home.html"
    }, 3000)

})
