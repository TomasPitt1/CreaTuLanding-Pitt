import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, imagen }) => {

  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={imagen} alt={nombre} />
      <div className="tarjeta-cuerpo">
        <h3 className="tarjeta-titulo">{nombre}</h3>
        <p className="tarjeta-precio">Precio: ${precio}</p>

        <Link to={`/item/${id}`} className="tarjeta-detalle">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;