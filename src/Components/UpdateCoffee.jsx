import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, test, category, details, photo, supplier } = coffee;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const supplier = form.supplier.value;

        const updatedCoffee = { name, quantity, test, category, details, photo, supplier};

        console.log(updatedCoffee);
        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:'PUT',
            headers :{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.modifiedCount){
            Swal.fire({
                title: 'success',
                text: 'Updated coffee sucessfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
           }
        })

    }
    return (
        <div className='bg-[#F4F3F0] p-20 w-3/4 mx-auto'>
            <h2 className='text-3xl font-extrabold text-center mb-2'>Update Coffee : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* from  of name and quantity row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from of Supplier and text row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='test' defaultValue={test} placeholder="Test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from  of category and details row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photo Url */}
                <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={photo} placeholder="photo" className="input input-bordered w-full " />
                        </label>
                        {/* button add */}
                        <input className='btn btn-block mt-4 bg-[#D2B48C]' type="submit" value="Update" />
                    </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;