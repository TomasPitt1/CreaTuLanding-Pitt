
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import products from "../../Products/products.json";

const ItemListContainer = () => {
  const { idCategoria } = useParams();
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(true);


  const getProductos = (categoria) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (!categoria) return resolve(products);
        resolve(
          products.filter(
            (p) => (p.categoria || "").toLowerCase() === categoria.toLowerCase()
          )
        );
      }, 700);
    });

  useEffect(() => {
    setCargando(true);
    getProductos(idCategoria)
      .then((res) => setLista(res))
      .finally(() => setCargando(false));
  }, [idCategoria]);

  if (cargando) {
    return (
      <section className="contenedor-lista contenedor-cargando">
        <div className="cargando" />
        <p className="cargando-texto">Cargando productos…</p>
      </section>
    );
  }

  return (
    <section className="contenedor-lista">
      <h2 className='titulo-inicio'>{idCategoria ? ` ${idCategoria}` : "Bienvenidos a TEKI!!"}</h2>
      <h3 className='titulo-secundario'>{idCategoria ? "" : "Conoce nuestros productos"}</h3>

      <ItemList productos={lista} />
    </section>
  );
};

export default ItemListContainer;