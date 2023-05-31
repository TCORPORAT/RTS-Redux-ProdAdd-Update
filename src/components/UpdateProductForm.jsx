import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../redux/reducers";

const UpdateProductForm = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleProductChange = (e) => {
    const productId = parseInt(e.target.value, 10);
    setSelectedProduct(productId);
    const product = products.find((p) => p.id === productId);
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: selectedProduct,
      title,
      description,
      price
    };
    dispatch(updateProduct(updatedProduct));
    setSelectedProduct("");
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <h2>Update Product</h2>
      <select value={selectedProduct} onChange={handleProductChange}>
        <option value="">Select a product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
      {selectedProduct && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateProductForm;
