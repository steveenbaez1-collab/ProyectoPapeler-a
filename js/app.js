// ==========================================
// SISTEMA DE CONTROL DE INVENTARIO
// ==========================================

// Lista de productos
let productos = [];

// Lista de movimientos
let movimientos = [];


// ==========================================
// CAMBIO DE SECCIONES
// ==========================================

function mostrarSeccion(nombreSeccion, boton) {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    const seccionSeleccionada =
        document.getElementById(nombreSeccion);

    seccionSeleccionada.classList.add("activa");


    const botones = document.querySelectorAll(".boton-menu");

    botones.forEach(function(botonMenu) {
        botonMenu.classList.remove("activo");
    });

    boton.classList.add("activo");

    actualizarInterfaz();
}


// ==========================================
// REGISTRAR PRODUCTO
// ==========================================

document
    .getElementById("formularioProducto")
    .addEventListener("submit", function(evento) {

        evento.preventDefault();

        const codigo =
            document.getElementById("codigo").value.trim();

        const nombre =
            document.getElementById("nombre").value.trim();

        const cantidad =
            Number(document.getElementById("cantidad").value);


        // Validar campos
        if (codigo === "" || nombre === "") {

            mostrarMensaje(
                "mensajeProducto",
                "Todos los campos son obligatorios.",
                "error"
            );

            return;
        }


        if (cantidad < 0 || isNaN(cantidad)) {

            mostrarMensaje(
                "mensajeProducto",
                "La cantidad debe ser un número válido.",
                "error"
            );

            return;
        }


        // Verificar código repetido
        const productoExistente = productos.find(function(producto) {

            return producto.codigo.toLowerCase() === codigo.toLowerCase();

        });


        if (productoExistente) {

            mostrarMensaje(
                "mensajeProducto",
                "Ya existe un producto con ese código.",
                "error"
            );

            return;
        }


        // Crear producto
        const producto = {

            codigo: codigo,
            nombre: nombre,
            cantidad: cantidad

        };


        productos.push(producto);


        mostrarMensaje(
            "mensajeProducto",
            "Producto registrado correctamente.",
            "exito"
        );


        // Limpiar formulario
        document.getElementById("formularioProducto").reset();


        actualizarInterfaz();
    });


// ==========================================
// REGISTRAR MOVIMIENTO
// ==========================================

document
    .getElementById("formularioMovimiento")
    .addEventListener("submit", function(evento) {

        evento.preventDefault();


        const codigoProducto =
            document.getElementById("productoMovimiento").value;

        const tipo =
            document.getElementById("tipoMovimiento").value;

        const cantidad =
            Number(
                document.getElementById("cantidadMovimiento").value
            );


        if (codigoProducto === "" || tipo === "") {

            mostrarMensaje(
                "mensajeMovimiento",
                "Debe seleccionar el producto y el tipo de movimiento.",
                "error"
            );

            return;
        }


        if (cantidad <= 0 || isNaN(cantidad)) {

            mostrarMensaje(
                "mensajeMovimiento",
                "La cantidad debe ser mayor que cero.",
                "error"
            );

            return;
        }


        // Buscar producto
        const producto = productos.find(function(producto) {

            return producto.codigo === codigoProducto;

        });


        if (!producto) {

            mostrarMensaje(
                "mensajeMovimiento",
                "El producto no existe.",
                "error"
            );

            return;
        }


        // ==========================================
        // ENTRADA
        // ==========================================

        if (tipo === "entrada") {

            producto.cantidad =
                producto.cantidad + cantidad;


            registrarMovimiento(
                producto,
                "Entrada",
                cantidad,
                "Registrada"
            );


            mostrarMensaje(
                "mensajeMovimiento",
                "Entrada registrada correctamente.",
                "exito"
            );
        }


        // ==========================================
        // SALIDA
        // ==========================================

        if (tipo === "salida") {


            // REGLA DE NEGOCIO
            // La salida no puede superar el stock.

            if (cantidad > producto.cantidad) {

                registrarMovimiento(
                    producto,
                    "Salida",
                    cantidad,
                    "Rechazada"
                );


                mostrarMensaje(
                    "mensajeMovimiento",
                    "La salida fue rechazada porque la cantidad solicitada supera el stock disponible.",
                    "error"
                );


                actualizarInterfaz();

                return;
            }


            // Si la cantidad es válida
            producto.cantidad =
                producto.cantidad - cantidad;


            registrarMovimiento(
                producto,
                "Salida",
                cantidad,
                "Registrada"
            );


            mostrarMensaje(
                "mensajeMovimiento",
                "Salida registrada correctamente.",
                "exito"
            );
        }


        document
            .getElementById("formularioMovimiento")
            .reset();


        actualizarInterfaz();

    });


// ==========================================
// REGISTRAR MOVIMIENTO
// ==========================================

function registrarMovimiento(
    producto,
    tipo,
    cantidad,
    resultado
) {

    const movimiento = {

        codigo: producto.codigo,
        tipo: tipo,
        cantidad: cantidad,
        resultado: resultado

    };


    movimientos.push(movimiento);
}


// ==========================================
// ACTUALIZAR TODA LA INTERFAZ
// ==========================================

function actualizarInterfaz() {

    actualizarTablaProductos();

    actualizarTablaInventario();

    actualizarSelectProductos();

    actualizarTablaMovimientos();

    actualizarResumen();
}


// ==========================================
// TABLA DE PRODUCTOS
// ==========================================

function actualizarTablaProductos() {

    const tabla =
        document.getElementById("tablaProductos");


    tabla.innerHTML = "";


    if (productos.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="3">
                    No hay productos registrados.
                </td>
            </tr>
        `;

        return;
    }


    productos.forEach(function(producto) {

        const fila = document.createElement("tr");


        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
        `;


        tabla.appendChild(fila);

    });
}


// ==========================================
// TABLA DE INVENTARIO
// ==========================================

function actualizarTablaInventario() {

    const tabla =
        document.getElementById("tablaInventario");


    tabla.innerHTML = "";


    if (productos.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="3">
                    No hay productos registrados.
                </td>
            </tr>
        `;

        return;
    }


    productos.forEach(function(producto) {

        const fila = document.createElement("tr");


        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
        `;


        tabla.appendChild(fila);

    });
}


// ==========================================
// SELECT DE PRODUCTOS
// ==========================================

function actualizarSelectProductos() {

    const select =
        document.getElementById("productoMovimiento");


    const valorActual = select.value;


    select.innerHTML = `
        <option value="">
            Seleccione un producto
        </option>
    `;


    productos.forEach(function(producto) {

        const opcion =
            document.createElement("option");


        opcion.value = producto.codigo;

        opcion.textContent =
            producto.codigo + " - " + producto.nombre;


        select.appendChild(opcion);

    });


    if (
        productos.some(
            producto => producto.codigo === valorActual
        )
    ) {

        select.value = valorActual;

    }
}


// ==========================================
// TABLA DE MOVIMIENTOS
// ==========================================

function actualizarTablaMovimientos() {

    const tabla =
        document.getElementById("tablaMovimientos");


    tabla.innerHTML = "";


    if (movimientos.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="4">
                    No hay movimientos registrados.
                </td>
            </tr>
        `;

        return;
    }


    movimientos
        .slice()
        .reverse()
        .forEach(function(movimiento) {

            const fila =
                document.createElement("tr");


            fila.innerHTML = `
                <td>${movimiento.codigo}</td>
                <td>${movimiento.tipo}</td>
                <td>${movimiento.cantidad}</td>
                <td>${movimiento.resultado}</td>
            `;


            tabla.appendChild(fila);

        });
}


// ==========================================
// RESUMEN DEL INVENTARIO
// ==========================================

function actualizarResumen() {

    const totalProductos =
        productos.length;


    const totalUnidades =
        productos.reduce(
            function(total, producto) {

                return total + producto.cantidad;

            },
            0
        );


    document.getElementById("totalProductos").textContent =
        totalProductos;


    document.getElementById("totalUnidades").textContent =
        totalUnidades;
}


// ==========================================
// MOSTRAR MENSAJES
// ==========================================

function mostrarMensaje(
    elementoId,
    texto,
    tipo
) {

    const elemento =
        document.getElementById(elementoId);


    elemento.textContent = texto;


    elemento.className =
        "mensaje " + tipo;


    setTimeout(function() {

        elemento.className = "mensaje";

        elemento.textContent = "";

    }, 4000);
}

