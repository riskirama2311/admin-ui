import React from "react";
import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import MyDatatable from "../../components/MyDatatable/Mydatatable";

const Mylist = () => {
    return (
      <div className="mylist">
        <Sidebar />
        <div className="mylistContainer">
          <Navbar />
          <div className="widgets">
          <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
          </div>
  
          <div className="datatable">
            <MyDatatable title="All Data" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Mylist;