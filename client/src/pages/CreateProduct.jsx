import "./CreateProduct.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDesc(editData.desc);
      setPrice(editData.price);
      setStock(editData.stock);
      setCategory(editData.category);
      setImage(editData.image);
      setEditId(editData._id);
    }
  }, [editData]);

  const addProduct = async () => {
    await axios.post("http://localhost:8080/product", {
      title, desc, price, stock, category, image
    });
    navigate("/product-list");
  };

  const updateProduct = async () => {
    await axios.put(`http://localhost:8080/update/${editId}`, {
      productName: title,
      description: desc,
      price,
      image,
      category,
      stock,
    });
    navigate("/product-list");
  };

  return (
    <div className="product-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li className="active">Create Product</li>
          <li onClick={() => navigate("/product-list")}>Product List</li>
        </ul>
      </div>

      {/* Main */}
      <div className="product-main">
        <div className="form-card">
          <h2>{editId ? "Update Product" : "Create Product"}</h2>

          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
          <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
          <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
          <input value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" />
          <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
          <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />

          {editId ? (
            <button onClick={updateProduct}>Update Product</button>
          ) : (
            <button onClick={addProduct}>Add Product</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
