import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";

const BloodInventoryStatus = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}blood-inventory`)
      .then((resp) => {
        setInventoryList(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching blood inventory data:", error);
      });
  }, []);

  const filteredInventory = inventoryList.filter((item) =>
    item.blood_group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <Header />
    <div className="container mt-4">
      <div className="text-center">
        <h2 className="mb-4">Blood Inventory Status</h2>
      </div>

      {/* Search Input */}
      <div className="row mb-4">
        <div className="col-md-4 offset-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Blood Group (e.g., A+, O-)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="row">
        <div className="col">
          <table className="table table-bordered table-striped text-center">
            <thead className="thead-dark">
              <tr>
                <th>Inventory ID</th>
                <th>Blood Group</th>
                <th>Units Available</th>
                <th>Last Updated</th>
                <th>Storage Location</th>
                <th>Expiry Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.length > 0 ? (
                filteredInventory.map((item) => (
                  <tr key={item.inventory_id}>
                    <td>{item.inventory_id}</td>
                    <td>{item.blood_group}</td>
                    <td>{item.units_available}</td>
                    <td>{new Date(item.last_updated).toLocaleDateString()}</td>
                    <td>{item.storage_location}</td>
                    <td>{new Date(item.expiry_date).toLocaleDateString()}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No data found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BloodInventoryStatus;
