import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddedCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const supplier = form.supplier.value;

        const newCoffee = { name, quantity, test, category, details, photo, supplier};

        console.log(newCoffee);
        // send data to the server

        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers :{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Add coffee sucessfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
           }
        })

    }
    return (
        <>
        <Link className='ml-4 mt-4' to="/">Back To Home</Link>
        <div className='bg-[#F4F3F0] p-20 w-3/4 mx-auto'>
            <h2 className='text-3xl font-extrabold text-center mb-2'>Add a Coffee</h2>
            <p className='text-ceneter mb-4 text-1xl'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddedCoffee}>
                {/* from  of name and quantity row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='test' placeholder="Test" className="input input-bordered w-full" />
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
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photo Url */}
                <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered w-full " />
                        </label>
                        {/* button add */}
                        <input className='btn btn-block mt-4 bg-[#D2B48C]' type="submit" value="Add Coffee" />
                    </div>
            </form>
        </div>
        </>
    );
};

export default AddCoffee;