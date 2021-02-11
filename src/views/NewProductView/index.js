import React, { useState } from "react";
import { ProductService } from "../../services/ProductService";
import { FormattedMessage } from "react-intl";

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
      <h1>
        <FormattedMessage defaultMessage="New Product" id="product.new.title" />
      </h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          <FormattedMessage defaultMessage="Image" id="product.new.image" />
          <input
            name="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <FormattedMessage
            defaultMessage="Description"
            id="product.new.desc"
          />
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <FormattedMessage defaultMessage="Price" id="product.new.price" />
          <input
            name="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">
          <FormattedMessage
            defaultMessage="Create Product"
            id="product.new.create"
          />
        </button>
      </form>
    </div>
  );
}
