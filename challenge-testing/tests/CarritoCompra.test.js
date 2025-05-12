const { CarritoCompra } = require("../index")

let nuevoCarrito
let resultadoInit
let producto
let productos

beforeEach(() => {
    nuevoCarrito = new CarritoCompra();
    resultadoInit = { carrito:[] }
    producto = {
        nombre: "TV",
        precio: 100,
        cantidad: 10
    }
    resultado = [{
        nombre: "TV",
        precio: 100,
        cantidad: 10
    }]
});

function llenadodeCarrito(){
    productos.forEach( (elemento) => nuevoCarrito.agregarProducto(elemento) )
}

describe("Testeando CarritoCompra", () => {
// Que CarritoCompra esté definida y sea una clase 
    it("CarritoCompra esté definido", () => {
        expect(CarritoCompra).toBeInstanceOf(Function);
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
    });
// Que CarritoCompra tenga los métodos correspondientes 
    it("Debe tener los siguientes métodos", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined();
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe("Testeando constructor_CarritoCompra", () => {
// Que el constructor tenga un array vacío
    it("Debe inicializar como array vacío", () => {
        expect(nuevoCarrito.carrito).toEqual([])
        expect(nuevoCarrito.carrito).toBeInstanceOf(Array)
        expect(nuevoCarrito.carrito).toEqual(resultadoInit)
    });
})

describe("Testeando el método agregarProducto", () => {
// Que reciba un objproducto y lo agregue al carrito
    it("Debe recibir el objeto y agregarlo al carrito", () => {
        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.carrito).toEqual(resultado)
    });
})

describe("Testeando el método calcularTotal", () => {
// Que calcule el precio total de UN producto
    it("Debe calcular un precio total de un producto en el carrito", () => {
        nuevoCarrito.agregarProducto(producto);
        expect(nuevoCarrito.calcularTotal()).toBe(1000)
    });
// Que calcule el precio total de VARIOS productos
    it("Debe calcular un precio total de varios productos en el carrito", () => {
        llenadodeCarrito()
        expect(nuevoCarrito.calcularTotal()).toBe(4300)
    });
})

describe("Testeando el método aplicarDescuento", () => {
// Que calcule el descuento del precio total
    it("Debe aplicar un descuento al total", () => {
        llenadodeCarrito()
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(4300)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(3870)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(2150)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})