const productos = [
    { nombre: "Manzana", precio: 10 },
    { nombre: "Pera", precio: 20 },
    { nombre: "Mango", precio: 15 },
    
  ];
const productosSeleccionados = [];

function agregarProductoSeleccionado(nombreProducto) {
    const producto = productos.find((p) => p.nombre === nombreProducto);
  
    if (producto) {
      productosSeleccionados.push(producto);
    } else {
      console.log("Producto no encontrado");
    }
  }
  
function calcularCostoTotal() {
    let costoTotal = 0;
  
    for (const producto of productosSeleccionados) {
      costoTotal += producto.precio;
    }
  
    return costoTotal;
  }

agregarProductoSeleccionado("Manzana");
agregarProductoSeleccionado("Pera");
agregarProductoSeleccionado("Mango");

const costoTotal = calcularCostoTotal();
console.log("Costo total de los productos seleccionados: $" + costoTotal);