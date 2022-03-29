import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../utils/queries";
import "../index.css";
import Cart from "../components/Cart";

function OrderHistory() {
    const [orders, setOrders] = useState({
		address: "",
		address2: "",
		email: "",
		firstName: "",
		city: "",
		state: "",
		lastName: "",
		phone: "",
		zipCode: "",
		purchaseDate: ""  ,
		products: {} ,
    })
	const { data } = useQuery(QUERY_ORDERS);
	
    useEffect(() => {
        if(data) {
       
            
          data.orders.forEach((order) => {
              setOrders({
                  ...orders,
                  address: order.address,
                  address2: order.address2,
                  email: order.email,
                  firstName: order.firstName,
                  city: order.city,
                  state: order.state,
                  lastName: order.lastName,
                  phone: order.phone,
                  zipCode: order.zipCode,
                  purchaseDate: order.purchaseDate  ,
                  products: {}
            })
          });
          // add else if to check if `loading` is undefined in `useQuery()` Hook
            
        } 
      }, [data]);

    console.log(orders)
    
    return (
        <div>
            <div>
               
         
           </div>
			<table className="table">
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Name</th>
						<th>Address</th>
						<th>Purchase Date</th>
						<th>Products</th>
						<th>Status</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>order.id</td>
						<td>username</td>
						<td>user.address</td>
						<td>user.Purchasedate</td>
						<td>order.products</td>
						{/* <td class="row">
							<input type="checkbox" id="scales" name="deliver" checked />
							<label for="scales">Delivered</label>
							<input type="checkbox" id="scales" name="deliver" />
							<label for="scales">Not Delivered</label>
						</td> */}
					</tr>
				</tbody>
            </table>
            <div>
          
            </div>
		</div>
	);
}

export default OrderHistory;
