import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducers";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price,
      thumbnail: "https://dummyimage.com/100x100/000/fff"
    };
    dispatch(addProduct(newProduct));
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProductForm;
