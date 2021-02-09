import React, { useState, useEffect } from "react";
import { ProductService } from "../../services/ProductService";
import { Channel } from "../../services/EventService";
import ProductsList from "../../components/ProductsList";

export default function ProductsListView() {
  const [products, setProducts] = useState([]);

  const startData = async () => {
    const list = await ProductService.list();
    await ProductService.list();
    setProducts([...list]);
  };

  const remove = async (productId) => {
    const productIndex = products.findIndex(
      (product) => product.id === productId
    );
    await ProductService.remove(productId);
    products.splice(productIndex, 1);
    setProducts([...products]);
  };

  useEffect(() => {
    startData();
  }, []);

  useEffect(() => {
    if (products) {
      Channel.on("product:remove", remove);
    }

    return () => {
      Channel.removeListener("product:remove", remove);
    };
  }, [products]);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductsList products={products} />
    </div>
  );
}
