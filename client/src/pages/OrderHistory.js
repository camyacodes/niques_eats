import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import "../index.css"
import Cart from '../components/Cart';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div>
            <table className='table'>
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
                        <td >order.products</td>
                        <td class="row">
                            <input type="checkbox" id="scales" name="deliver"
                                checked />
                            <label for="scales">Delivered</label>
                            <input type="checkbox" id="scales" name="deliver"
                                 />
                            <label for="scales">Not Delivered</label>
                        </td>

                    </tr>


                </tbody>


            </table>
        </div>
  );
}

export default OrderHistory;
