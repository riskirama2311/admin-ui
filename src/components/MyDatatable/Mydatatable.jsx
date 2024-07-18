import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./mydatatable.scss";
import { Link } from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const MyDatatable = ({ title }) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "your-collection-name"));
      const dataList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(dataList);
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (newData.trim()) {
      await addDoc(collection(db, "your-collection-name"), { name: newData });
      setNewData("");
      // Refresh data
      const querySnapshot = await getDocs(collection(db, "your-collection-name"));
      const dataList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(dataList);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "your-collection-name", id));
    // Refresh data
    const querySnapshot = await getDocs(collection(db, "your-collection-name"));
    const dataList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setData(dataList);
  };

  return (
    <div className="mydatatable">
      <h2>{title}</h2>
      <div className="add-data">
        <input 
          type="text" 
          value={newData} 
          onChange={(e) => setNewData(e.target.value)} 
          placeholder="Add new data" 
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDatatable;