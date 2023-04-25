var mochila = ['A', 'B', 'C', 'D'];

    function vender() {
        mochila.splice(3, 1);
    }

    function compra(item) {
        mochila.push(item);
    }

    function muestraInventario() {
        console.log(mochila);
    }