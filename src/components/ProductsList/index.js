import React, { useState, useEffect } from "react";
import { Channel } from "../../services/EventService";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FormattedNumber } from "react-intl";

export default function ProductsList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.products) {
      setProducts(props.products);
    }
  }, [props.products]);

  function remove(product) {
    Channel.emit("product:remove", product.id);
  }

  return (
    <ul className="product-list">
      <TransitionGroup>
        {products.map((product) => (
          <CSSTransition key={product.id} timeout={300} classNames={product}>
            <li className="product-list-item">
              <button onClick={() => remove(product)}>X</button>
              <img src={product.image} alt={product.description} />
              <div>{product.description}</div>
              <div>
                <FormattedNumber
                  value={product.price}
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                />
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
