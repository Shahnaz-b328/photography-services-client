import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const ServicesData = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('https://intense-escarpment-80921.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServicesData(data))
    },[])
    return (
        <section className="container mt-5">
            <h2 style={{color:'navy', fontWeight:'400', textAlign:'center'}}>Services</h2>
            <div className="row gap-5 mt-3 mx-5">
                {
                    servicesData.map(service => <Services service={service} key={service._id}></Services>)
                }
            </div>
        </section>
    );
};

export default ServicesData;