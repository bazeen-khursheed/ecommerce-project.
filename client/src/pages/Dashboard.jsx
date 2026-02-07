import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
     
     
      
    <div className="nav">
      <h1 className="">Dashboard</h1>
    </div>
      <div className="dashboard-main">
        

        <div className="dashboard-cards">
          <div className="card" >
            <h3>Create Product</h3>
            <p>Add new product</p>
            <button onClick={() => navigate("/create-product")}>Add Product</button>
          </div>

          <div className="card" >
            <h3>Product List</h3>
            <p>Edit / Delete products</p>
            <button onClick={() => navigate("/product-list")}>Product List</button>
          </div>
        </div>
      </div>
    </div>
  );
  navigate("/dashboardList");
};

export default Dashboard;
