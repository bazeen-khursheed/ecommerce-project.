


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Product = () => {
  const [productName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/create", {
        productName,
        description,
        price,
        image,
      });

      toast.success("Product added successfully!");
      navigate("/products");
    } catch (error) {
      toast.error("Please try again later!");
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default Product;
