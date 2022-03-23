import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
// import "../../index.css"


// const orders = [
//     {
//         id:1,
//         email: 'testing@test.com',


//     }
// ]
function Orders () {
//   const { data } = useQuery(QUERY_USER);
 
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
        <tbody>
       
            {/* <tr>
                <td>{order.id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
            </tr>
      */}

        </tbody>



            </table>


        </div>
    )
}


export default Orders;