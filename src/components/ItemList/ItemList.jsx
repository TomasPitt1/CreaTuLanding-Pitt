import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="item-lista">
      {productos.map((p) => (
        <Item
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagen={p.imagen}
          descripcion={p.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemList;