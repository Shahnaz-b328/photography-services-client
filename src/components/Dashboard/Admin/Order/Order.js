import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://intense-escarpment-80921.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map((order) =>
                    (<tr kye={order._id}>
                        <td>{order.UserName}</td>
                        <td>{order.email}</td>
                        <td>{order.title}</td>
                        <td>{order.price}</td>
                        <td>{order.payment}</td>
                        <td>{order.orderTime}</td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;