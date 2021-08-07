import React from 'react';
import { useHistory } from 'react-router-dom';
import './Services.css';
const Services = (props) => {
    const { image, title, price } = props.service;
    const history = useHistory();
    const photographyDetails = (title) => {
        history.push(`/services/${title}`)
    }
    const handleBooking = (title) => {
        history.push(`/booking/${title}`)
    }
    return (
        <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: '200px', width: '286px' }} src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="text-design">{title}</p>
                    <p class="text-design">${price}</p>
                </div>
                <div>
                    <button onClick={() => photographyDetails(title)} className="learn-more">More</button>
                    <button onClick={() => handleBooking(title)} className="buy-now">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Services;