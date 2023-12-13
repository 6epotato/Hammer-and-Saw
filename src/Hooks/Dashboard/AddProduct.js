import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: tool, isLoading } = useQuery('services', () => fetch('https://hammer-and-saw-server.vercel.app/tool').then(res => res.json()))

    const imageKey = '6fe6eceade1c589e0923d835ad57b39d';
    const onSubmit = async data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const item = {
                        name: data.name,
                        price: data.price,
                        moq: data.moq,
                        quantity: data.quantity,
                        description: data.description,
                        img: img
                    }
                    // send to your database 
                    fetch('https://hammer-and-saw-server.vercel.app/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Item added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Item');
                            }
                        })
                }
            })

    };
    return (
        <div className='grid items-center justify-center'>
            <h1 className='text-bold text-3xl my-12'>Add A New Item</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* field for name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input  {...register("name", {
                        required: {
                            value: true,
                            message: "Name is Required"
                        },
                    })}
                        type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                    </label>
                </div>
                {/* field for minimum quantity */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>

                    </label>
                    <input  {...register("moq", {
                        required: {
                            value: true,
                            message: "Minimum Quantity is Required"
                        },
                    })}
                        type="Number" placeholder="Enter Minimum Quantity" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* field for  quantity */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Quantity</span>

                    </label>
                    <input  {...register("quantity", {
                    })}
                        type="Number" placeholder="Enter Minimum Quantity" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* field for  price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Price</span>

                    </label>
                    <input  {...register("price", {
                    })}
                        type="Number" placeholder="Enter Price" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* field for  description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Description</span>

                    </label>
                    <textarea  {...register("description", {
                    })}
                        type="text" placeholder="Enter Product Description" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* field for  image */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Image</span>

                    </label>
                    <input  {...register("image", {
                    })}
                        type="file" placeholder="Enter Product Image" className="input input-bordered w-full max-w-xs" />

                </div>

                <input className='btn  w-full max-w-xs' type="submit" value={'Add Item'} />
            </form>
        </div>
    );
};

export default AddProduct;