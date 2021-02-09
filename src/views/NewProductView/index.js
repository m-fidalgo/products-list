import React, { useState } from "react";
import { ProductService } from "../../services/ProductService";

export default function NewProductView() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      image,
      description,
      price,
    };

    if (newProduct.description && newProduct.price) {
      ProductService.create(newProduct);
      setImage("");
      setDescription("");
      setPrice(0);
    }
  }

  return (
    <div>
      <h1>Novo Produto</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          <span>Imagem</span>
          <input
            name="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Descrição</span>
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span>Preço</span>
          <input
            name="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}
