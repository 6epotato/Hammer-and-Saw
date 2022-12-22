import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {

        event.preventDefault();
        const rating = event.target.rating.value;
        const description = event.target.description.value;

        const feedbacks = {
            rating: rating,
            description: description,
            customer: user.email,
            customerName: user.displayName,
        }

        fetch('https://hammer-and-saw-server.onrender.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbacks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Thanks for your feedback')
            })

    }
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Give a Feed back</h2>
                    <p>Give Us a Rating within 5</p>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1'>
                        <label className="label">
                            <span className="label-text">Rating</span>

                        </label>
                        <input type="number" name='rating' placeholder="Enter your rating" class="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Discription</span>

                        </label>
                        <textarea type="text" name='description' placeholder="Description" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value={'submit'} class="btn w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;