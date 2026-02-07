import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/product");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    getProducts();
  };

  return (
    <div className="product-list-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/create-product")}>Create Product</li>
          <li className="active">Product List</li>
        </ul>
      </div>

      {/* Main */}
      <div className="product-list-main">
        <div className="table-card">
          <h2>Product List</h2>

          <table>
            <thead>
              <tr>
                <th>image</th>

                <th>Title</th>
                <th>desc</th>
               
                <th>Price</th>
                 <th>category</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map(item => (
                <tr key={item._id}>
                  <td><img src={item.image} /></td>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button
                      className="action-btn edit"
                      onClick={() => navigate("/create-product", { state: item })}
                    >
                      Edit
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default ProductList;
