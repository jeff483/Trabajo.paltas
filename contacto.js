document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Número de teléfono de WhatsApp (con el código de país, sin signos de + ni espacios)
    const numeroTelefono = "51930270662";  // Cambia por tu número de WhatsApp

    // Crear el mensaje que se enviará
    const texto = `¡Hola! Me llamo ${nombre} y mi dirección es ${email}. Quiero hacer la siguiente consulta o comprar: ${mensaje}`;

    // Crear el enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(texto)}`;

    // Redirigir a WhatsApp
    window.open(enlaceWhatsApp, "_blank");
});
