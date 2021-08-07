import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            price: data.price,
            description: data.description,
            image: image
        };
        const url = 'https://intense-escarpment-80921.herokuapp.com/addService'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Services data Successfully')
                }
            })
    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        console.log(event.target.files[0])
        imageData.set('key', 'a68051547e5c105cf6cb5cee8b67d4bd')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url)
            });

    }
    return (
        <section className="bg-light container w-75">
            <div className="container ml-5 my-5">
                <form className="d-flex flex-column  my-5 gap-3 w-25" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="title" placeholder="Title" ref={register} />
                    <input type="text" name="price" placeholder="Price" ref={register} />
                    <input type="text" name="description" placeholder="Description" ref={register} />

                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input style={{ backgroundColor: 'LightCoral', color: 'white', border: 'none', height: '35px' }} type="submit" value="save" />
                </form>
            </div>
        </section>
    );
};

export default AddService;