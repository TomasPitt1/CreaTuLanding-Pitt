import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className="carrito">
      <FaShoppingCart className="icono-carrito" />
      <span className="contador-carrito">3</span>
    </div>
  );
};

export default CartWidget;
