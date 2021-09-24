class Curso{
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    
}
const MarketingDigital = new Curso(1, 'MarketingDigital', 800);
const RedesSociales = new Curso(2, 'RedesSociales', 8000);
const Programacion = new Curso(3, 'Programacion', 6000);

console.Registro(MarketingDigital);
console.log(RedesSociales);
console.log(Programacion);

//Ordenar por precio
let arrayDePrecios = [MarketingDigital.precio, RedesSociales.precio, Programacion.precio]
console.log(arrayDePrecios.sort((a, b) => a - b));

let venta = prompt('Ingrese los numeros de los cursos que va a comprar: \n' + MarketingDigital.id +'-'+ MarketingDigital.nombre + '\n' + RedesSociales.id +'-'+ RedesSociales.nombre +'\n'+ Programacion.id +'-'+ Programacion.nombre);

const cadaVenta = venta.split(' ');
for (let i = 0; i < 3; i++){
    if (cadaVenta[i] == MarketingDigital.id){
        MarketingDigital.vendido = true
    } 
    if (cadaVenta[i] == RedesSociales.id){
        RedesSociales.vendido = true
    }
    if (cadaVenta[i] == Programacion.id){
        Programacion.vendido = true
    }
}
console.log(MarketingDigital)
console.log(RedesSociales)
console.log(Programacion)


let carrito = [];
if (MarketingDigital.vendido == true) {
    carrito.push(MarketingDigital.descuento50())
} else {
    carrito.push(0)
}
if (RedesSociales.vendido == true) {
    carrito.push(RedesSociales.descuento50())
} else {
    carrito.push(0)
}
if (Programacion.vendido == true) {
    carrito.push(Programacion.descuento50())
} else {
    carrito.push(0)
}

console.log(carrito)

let totalCompra = carrito[0] + carrito[1] + carrito[2];

let totalCarrito = console.log('El total de su compra es: $' + totalCompra);

let cantidadCuotas;
if (totalCompra != 0){
    do {
        cantidadCuotas = parseInt(prompt('Elija cantidad de cuotas: 1-12 sin interes'));
    } while (isNaN(cantidadCuotas) == true || cantidadCuotas > 12 || cantidadCuotas < 1) 
}

let suPago = totalCompra/cantidadCuotas;

if (totalCompra !=0) {
alert('Su compra total es de: $' + totalCompra + ' y sera en ' + cantidadCuotas + ' pago/s de $' + suPago)
} else {
    alert('Gracias por su visita')
}
