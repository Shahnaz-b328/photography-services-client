import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-escarpment-80921.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [])

    const deleteService = (title) => {
        fetch(`https://intense-escarpment-80921.herokuapp.com/delete/${title}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(result => {
            console.log(result)
            if (result) {
              alert('services deleted successfully')
            }
          })
      }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {manageServices.map((services) =>
                    (<tr kye={services._id}>
                        <td>{services.title}</td>
                        <td>{services.price}</td>
                        <td>{services.description}</td>
                        <td onClick={() => deleteService(services.title)}><button style={{ backgroundColor: 'lightsalmon', border: 'none', color: 'navy' }}>Delete</button></td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;