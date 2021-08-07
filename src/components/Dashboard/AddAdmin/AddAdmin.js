import React from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = admin => {
        const newAdmin = {
            email: admin.email,
        };
        fetch('https://intense-escarpment-80921.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('new admin added')
                }
            })
    }
    return (

        <section className="bg-light container w-75">
            <div className="container ml-5 my-5">
                <form className="d-flex flex-column  my-5 gap-3 w-25" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="email" placeholder="Enter Email" ref={register} />

                    <input style={{ backgroundColor: 'LightCoral', color: 'white', border: 'none', height: '35px' }} type="submit" value="save" />
                </form>
            </div>
        </section>

    );
};

export default AddAdmin;