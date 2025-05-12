
class CarritoCompra {
    constructor(){
        this.carrito = []
    };

    agregarProducto(producto){
        this.carrito.push(producto);
    };

    calcularTotal(){
        return this.carrito.reduce((acum, objProducto) => {
            acum += objProducto.precio * objProducto.cantidad, 0
        });
    };

    aplicarDescuento(porcentaje){
        const precioTotal = this.calcularTotal();
        const descuento = precioTotal * (porcentaje/100);
        return total - descuento;
    };
}

module.exports = {CarritoCompra};