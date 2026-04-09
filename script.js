const botones = document.querySelectorAll(".btn-agregar");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        console.log(nombre, precio);
    });
});