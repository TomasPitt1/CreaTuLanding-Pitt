import React from 'react';

function ItemListContainer(props) {
  return (
    <section className='item-list-container'>
      <h2>
        {props.titulo}
      </h2>
    </section>
  );
}

export default ItemListContainer;