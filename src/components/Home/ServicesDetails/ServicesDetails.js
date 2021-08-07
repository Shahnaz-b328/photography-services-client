import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = (props) => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://intense-escarpment-80921.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data[0]))
    }, [])
    const { title } = useParams();
    return (
        <div>
            <div class="card">
                <div style={{textAlign:'center', fontSize:'30px', color:'navy'}} class="card-header">
                    {title}
                </div>
                <div class="card-body">
                    <p style={{color:'navy', fontFamily:'sans-serif'}} class="card-text">{details.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;