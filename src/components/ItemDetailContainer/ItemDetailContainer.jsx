import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../../Products/products.json';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  const getProducto = (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const productId = parseInt(id, 10);
        const prod = products.find((p) => p.id === productId);
        resolve(prod);
      }, 700);
    });

  useEffect(() => {
    setCargando(true);
    getProducto(id)
      .then((res) => setProducto(res))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return (
      <section className="detalle contenedor-cargando">
        <div className="cargando" />
        <p className="cargando-texto">Cargando producto…</p>
      </section>
    );
  }

  if (!producto) {
    return <p className="producto-no-encontrado">Producto no encontrado</p>;
  }

  return (
    <div className="detalle">

      <img className="detalle-imagen" src={producto.imagen} alt={producto.nombre} style={{ width: "200px" }} />

      <div className="detalle-cuerpo">
        <h2 className="detalle-titulo">{producto.nombre}</h2>
        <p className="detalle-descripcion">{producto.descripcion}</p>
        <p className="detalle-precio">Precio: ${producto.precio}</p>
        <Link to="/carrito" className="boton-agregar">
          Agregar al carrito
        </Link>
      </div>
    </div>
  );
};















//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return <p className='producto-no-encontrado'>Producto no encontrado</p>;
//   }

//   return (
//     <div className='detalle'>
//       <img className='detalle-imagen' src={product.imagen} alt={product.nombre} style={{ width: "200px" }} />
//       <div className='detalle-cuerpo'>
//         <h2 className='detalle-titulo'>{product.nombre}</h2>
//         <p className='detalle-descripcion'>{product.descripcion}</p>
//         <p className='detalle-precio'>Precio: ${product.precio}</p>
//       </div>
//     </div>
//   );
// };

export default ItemDetailContainer;