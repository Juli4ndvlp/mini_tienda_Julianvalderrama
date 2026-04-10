let cantidadItems = 0;
let totalAcumulado = 0;

const botones = document.querySelectorAll(".btn-agregar");
const badge = document.getElementById("badge");


botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        AgregarAlCarrito(nombre, precio);
        cantidadItems++;
        totalAcumulado += precio;
        updateBadge();
        updateTotal();
    });
});

// Agregar al carrito
function AgregarAlCarrito(nombre, precio) {
    const listaCarrito = document.getElementById("lista-carrito");

    const nuevoItem = document.createElement("li");

    nuevoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    nuevoItem.innerHTML = `<span>${nombre}</span> 
        <span class="fw-bold">$${precio.toLocaleString()}</span>
        <button class="btn btn-danger btn-sm btn-eliminar">X</button>
    `;

    listaCarrito.appendChild(nuevoItem);

    const btnEliminar = nuevoItem.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function () {
        eliminarItem(nuevoItem, precio);
    });
}


// actualizacion del nav
function updateBadge() {
    badge.textContent = cantidadItems;
}


//Eliminacion de productos
function eliminarItem(li, precio) {
    li.remove();
    totalAcumulado -= precio;
    cantidadItems--;
    updateTotal();
    updateBadge();
}

function updateTotal() {
    const spanTotal = document.getElementById("total");
    spanTotal.textContent = '$' + totalAcumulado.toLocaleString('es-CO', { minimumFractionDigits: 2 });
}

