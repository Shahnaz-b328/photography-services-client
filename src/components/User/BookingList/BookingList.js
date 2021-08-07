import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch('https://intense-escarpment-80921.herokuapp.com/order')
      .then(res => res.json())
      .then(data => setBookList(data))
  }, [])
    return (
        <div className="mr-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
               { bookList.map((booking) =>
                    (<tr kye={booking._id}>
                        <td>{booking.UserName}</td>
                        <td>{booking.email}</td>
                        <td>{booking.title}</td>
                        <td>{booking.price}</td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;