import React from "react";
import "./ListaMenu.css";

export function ListaMenu({ pratos, quantidades, onQuantidadeChange }) {
  return (
    <div className="lista-menu">
      <h2>Pratos Típicos</h2>
      <div className="menu-grid">
        {pratos.map((prato) => (
          <div key={prato.id} className="menu-card">
            <img src={prato.image} alt={prato.name} className="menu-image" />
            <h3>{prato.name}</h3>
            <p>{prato.description}</p>
            <p>R$ {prato.price.toFixed(2)}</p>
            <div className="quantidade">
              <button onClick={() => onQuantidadeChange(prato.id, -1)}>-</button>
              <span>{quantidades[prato.id] || 0}</span>
              <button onClick={() => onQuantidadeChange(prato.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
