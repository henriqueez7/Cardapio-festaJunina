import React, { useState } from 'react'
import { ListaMenu } from './Componentes/ListaMenu/ListaMenu'
import { Pratos } from './utils/produtos'
import "./App.css" 
export function App() {
  const [quantidades, setQuantidades] = useState({})


  const hadleQuantidadeChange = (id, delta) => {
    setQuantidades((prevQuantidades) => {
      const newQuantidade = (prevQuantidades[id] || 0) + delta
      if (newQuantidade < 0) return prevQuantidades
      return { ...prevQuantidades, [id]: newQuantidade }
    });
  };

  const getTotalPrice = () => {
    return Pratos
      .reduce((total, Pratos) => {
        const quantidade = quantidades[Pratos.id] || 0
        return total + Pratos.price * quantidade
      }, 0)
      .toFixed(2)
  };

  return (
    <div className="App">
      <h1>Cardápio de Comidas de Festa Junina</h1>
      <ListaMenu pratos = {Pratos} quantidades={quantidades} onQuantidadeChange={hadleQuantidadeChange}/>
      <div className='total-price'>
        <h2>Total: R$ {getTotalPrice()}</h2>
      </div>
    </div>
  );
}
