// Animación para las imágenes (aparece cuando el panel es visible)
document.addEventListener("DOMContentLoaded", function () {
    const panelItems = document.querySelectorAll(".panel-item");

    window.addEventListener("scroll", function () {
        const windowHeight = window.innerHeight;

        panelItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= windowHeight - 100 && rect.bottom >= 100) {
                item.classList.add("visible");
            }
        });
    });

    // Agregar animación de aparición al hacer scroll
    const style = document.createElement("style");
    style.innerHTML = `
        .panel-item.visible .panel-imagen {
            animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});


function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    // Si el dropdown está oculto, lo mostramos
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

function toggleAdviceList() {
    var adviceList = document.getElementById('adviceList');
    // Cambiar la visibilidad de la lista
    if (adviceList.style.display === 'none' || adviceList.style.display === '') {
        adviceList.style.display = 'block';
    } else {
        adviceList.style.display = 'none';
    }
}

function toggleInfo() {
    var infoUso = document.getElementById("infoUso");
    // Cambiar el estado de la visibilidad
    if (infoUso.style.display === "none" || infoUso.style.display === "") {
      infoUso.style.display = "block";
    } else {
      infoUso.style.display = "none";
    }
  }

  function mostrarBeneficios() {
    var lista = document.getElementById("lista-beneficios");
    // Si la lista está oculta, la mostramos. Si está visible, la ocultamos.
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, cantidad) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = { nombre, precio, cantidad: parseInt(cantidad) };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombre} ha sido agregado al carrito.`);
}

// Función para cargar los productos en la página del carrito
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.cantidad}x ${producto.nombre} - S/. ${producto.precio * producto.cantidad}`;
        listaCarrito.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = total;
}

// Función para finalizar compra
function finalizarCompra() {
    alert('Gracias por tu compra. Pronto recibirás tu pedido.');
    localStorage.removeItem('carrito');
    window.location.href = 'productos.html';
}

// Llamar la función cargarCarrito si estamos en la página del carrito
if (window.location.pathname.includes('carrito.html')) {
    cargarCarrito();
}