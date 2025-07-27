import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo="Bienvenidos a TEKI!"/>
    </>
  );
}

export default App;
