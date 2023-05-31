import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./redux/reducers";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Possible Network Error!");

        const data = await response.json();
        console.log(data.results);

        const apiList = data.results.map((prod) => {
          return {
            title: prod.title,
            description: prod.description,
            price: prod.price,
            thumbnail: prod.thumbnail
          };
        });

        dispatch(addProduct(apiList));
      } catch (error) {
        console.log(`Error Occurred: ${error}`);
      }
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <AddProductForm />
      <UpdateProductForm />
      <ProductList />
    </div>
  );
}

export default App;
