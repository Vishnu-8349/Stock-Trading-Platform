import React, { useState, useEffect} from "react";
import axios from "axios";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
    }, []);
  return (
    <>
    <h3 className="title">Positions ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;