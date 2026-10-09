// ==========================================
// SISTEMA DE CONTROL DE INVENTARIO
// ==========================================

// Recuperar los datos guardados en este navegador.
const datosGuardados = cargarDatos();

// Lista de productos
let productos = datosGuardados.productos;

// Lista de movimientos
let movimientos = datosGuardados.movimientos;


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

        const stockMinimo =
            Number(document.getElementById("stockMinimo").value);


        // Validar campos
        if (codigo === "" || nombre === "") {

            mostrarMensaje(
                "mensajeProducto",
                "Todos los campos son obligatorios.",
                "error"
            );

            return;
        }


        if (cantidad < 0 || !Number.isInteger(cantidad)) {

            mostrarMensaje(
                "mensajeProducto",
                "La cantidad debe ser un número entero igual o mayor que cero.",
                "error"
            );

            return;
        }


        if (stockMinimo < 0 || !Number.isInteger(stockMinimo)) {

            mostrarMensaje(
                "mensajeProducto",
                "El stock mínimo debe ser un número entero igual o mayor que cero.",
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
            cantidad: cantidad,
            stockMinimo: stockMinimo

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


        if (cantidad <= 0 || !Number.isInteger(cantidad)) {

            mostrarMensaje(
                "mensajeMovimiento",
                "La cantidad debe ser un número entero mayor que cero.",
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
        resultado: resultado,
        fecha: new Date().toISOString()

    };


    movimientos.push(movimiento);
}


// ==========================================
// ACTUALIZAR TODA LA INTERFAZ
// ==========================================

function actualizarInterfaz() {

    guardarDatos();

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
                <td colspan="5">
                    No hay productos registrados.
                </td>
            </tr>
        `;

        return;
    }


    const textoBusqueda = document
        .getElementById("buscarProductos")
        .value.trim().toLowerCase();

    const productosVisibles = productos.filter(function(producto) {
        return producto.codigo.toLowerCase().includes(textoBusqueda) ||
            producto.nombre.toLowerCase().includes(textoBusqueda);
    });

    if (productosVisibles.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="5">No se encontraron productos con esa búsqueda.</td>
            </tr>
        `;
        return;
    }

    productosVisibles.forEach(function(producto) {

        const fila = document.createElement("tr");

        const estado = obtenerEstadoStock(producto);

        agregarCelda(fila, producto.codigo);
        agregarCelda(fila, producto.nombre);
        agregarCelda(fila, producto.cantidad);
        agregarCelda(fila, producto.stockMinimo);

        const celdaEstado = document.createElement("td");
        const etiquetaEstado = document.createElement("span");
        etiquetaEstado.className = "estado-stock " + estado.clase;
        etiquetaEstado.textContent = estado.texto;
        celdaEstado.appendChild(etiquetaEstado);
        fila.appendChild(celdaEstado);


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
                <td colspan="5">
                    No hay productos registrados.
                </td>
            </tr>
        `;

        return;
    }


    const textoBusqueda = document
        .getElementById("buscarInventario")
        .value.trim().toLowerCase();
    const estadoSeleccionado = document
        .getElementById("filtroEstadoInventario")
        .value;

    const productosVisibles = productos.filter(function(producto) {
        const coincideBusqueda = producto.codigo.toLowerCase().includes(textoBusqueda) ||
            producto.nombre.toLowerCase().includes(textoBusqueda);
        const coincideEstado = estadoSeleccionado === "todos" ||
            obtenerEstadoStock(producto).clase === estadoSeleccionado;

        return coincideBusqueda && coincideEstado;
    });

    if (productosVisibles.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="5">No se encontraron productos con esa búsqueda.</td>
            </tr>
        `;
        return;
    }

    productosVisibles.forEach(function(producto) {

        const fila = document.createElement("tr");

        const estado = obtenerEstadoStock(producto);

        agregarCelda(fila, producto.codigo);
        agregarCelda(fila, producto.nombre);
        agregarCelda(fila, producto.cantidad);
        agregarCelda(fila, producto.stockMinimo);

        const celdaEstado = document.createElement("td");
        const etiquetaEstado = document.createElement("span");
        etiquetaEstado.className = "estado-stock " + estado.clase;
        etiquetaEstado.textContent = estado.texto;
        celdaEstado.appendChild(etiquetaEstado);
        fila.appendChild(celdaEstado);


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
                <td colspan="5">
                    No hay movimientos registrados.
                </td>
            </tr>
        `;

        return;
    }


    const tipoSeleccionado = document
        .getElementById("filtroTipoMovimiento")
        .value;

    const movimientosVisibles = movimientos
        .slice()
        .reverse()
        .filter(function(movimiento) {
            return tipoSeleccionado === "todos" ||
                movimiento.tipo === tipoSeleccionado;
        });

    if (movimientosVisibles.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="5">No hay movimientos para este filtro.</td>
            </tr>
        `;
        return;
    }

    movimientosVisibles
        .forEach(function(movimiento) {

            const fila =
                document.createElement("tr");


            agregarCelda(fila, movimiento.codigo);
            agregarCelda(fila, movimiento.tipo);
            agregarCelda(fila, movimiento.cantidad);
            agregarCelda(fila, movimiento.resultado);
            agregarCelda(
                fila,
                movimiento.fecha
                    ? new Date(movimiento.fecha).toLocaleString("es-CO")
                    : "Sin fecha"
            );


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

    const totalStockBajo =
        productos.filter(function(producto) {

            return producto.cantidad <= producto.stockMinimo;

        }).length;


    document.getElementById("totalProductos").textContent =
        totalProductos;


    document.getElementById("totalUnidades").textContent =
        totalUnidades;

    document.getElementById("totalStockBajo").textContent =
        totalStockBajo;
}


document
    .getElementById("buscarProductos")
    .addEventListener("input", actualizarTablaProductos);

document
    .getElementById("buscarInventario")
    .addEventListener("input", actualizarTablaInventario);

document
    .getElementById("filtroEstadoInventario")
    .addEventListener("change", actualizarTablaInventario);

document
    .getElementById("filtroTipoMovimiento")
    .addEventListener("change", actualizarTablaMovimientos);

document
    .getElementById("exportarInventario")
    .addEventListener("click", exportarInventarioCSV);


function exportarInventarioCSV() {

    if (productos.length === 0) {
        mostrarMensaje(
            "mensajeExportacion",
            "No hay productos para exportar.",
            "error"
        );
        return;
    }

    const filas = [
        ["Código", "Producto", "Cantidad disponible", "Stock mínimo", "Estado"],
        ...productos.map(function(producto) {
            return [
                producto.codigo,
                producto.nombre,
                producto.cantidad,
                producto.stockMinimo,
                obtenerEstadoStock(producto).texto
            ];
        })
    ];

    const contenido = filas
        .map(function(fila) {
            return fila.map(escaparValorCSV).join(";");
        })
        .join("\r\n");

    descargarCSV(contenido, "inventario-papeleria.csv");
    mostrarMensaje("mensajeExportacion", "Inventario exportado correctamente.", "exito");
}


function escaparValorCSV(valor) {

    let texto = String(valor);

    if (/^[\t\r ]*[=+\-@]/.test(texto)) {
        texto = "'" + texto;
    }

    return "\"" + texto.replace(/\"/g, "\"\"") + "\"";
}


function descargarCSV(contenido, nombreArchivo) {

    const archivo = new Blob(["\uFEFF", contenido], {
        type: "text/csv;charset=utf-8"
    });
    const enlace = document.createElement("a");
    const url = URL.createObjectURL(archivo);

    enlace.href = url;
    enlace.download = nombreArchivo;
    enlace.click();
    setTimeout(function() {
        URL.revokeObjectURL(url);
    }, 0);
}


// Leer los datos guardados. Si no existen o están dañados, iniciar vacío.
function cargarDatos() {

    try {
        const datos = localStorage.getItem("inventarioPapeleria");

        if (!datos) {
            return { productos: [], movimientos: [] };
        }

        const contenido = JSON.parse(datos);

        return {
            productos: Array.isArray(contenido.productos)
                ? contenido.productos
                : [],
            movimientos: Array.isArray(contenido.movimientos)
                ? contenido.movimientos
                : []
        };
    } catch (error) {
        console.error("No se pudieron recuperar los datos del inventario.", error);
        return { productos: [], movimientos: [] };
    }
}


// Guardar productos y movimientos en el almacenamiento local del navegador.
function guardarDatos() {

    try {
        localStorage.setItem("inventarioPapeleria", JSON.stringify({
            productos: productos,
            movimientos: movimientos
        }));
    } catch (error) {
        console.error("No se pudieron guardar los datos del inventario.", error);
    }
}


// Agregar valores como texto para que no se interpreten como HTML.
function agregarCelda(fila, valor) {

    const celda = document.createElement("td");
    celda.textContent = valor;
    fila.appendChild(celda);
}


// ==========================================
// ESTADO DEL STOCK
// ==========================================

function obtenerEstadoStock(producto) {

    if (producto.cantidad <= producto.stockMinimo) {

        return {
            texto: "Stock bajo",
            clase: "bajo"
        };
    }

    return {
        texto: "Disponible",
        clase: "disponible"
    };
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


// Dibujar el estado recuperado al abrir o recargar la aplicación.
actualizarInterfaz();

