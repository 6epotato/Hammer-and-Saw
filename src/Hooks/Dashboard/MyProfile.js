import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = event => {
        event.preventDefault();
        const phone = event.target.phone.value;

        const address = event.target.address.value;
        const education = event.target.education.value;
        const linkedin = event.target.linkedin.value;

        const profile = {
            phone: phone,
            address: address,
            education: education,
            linkedin: linkedin,
            customer: user.email,
            customerName: user.displayName,
        }

        fetch('https://hammer-and-saw-server.onrender.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('You have succesfully added Your profile')
            })
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-2xl font-bold">Name: {user.displayName}</h1>
                        <h1 class="text-xl font-bold">Email: {user.email}</h1>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1'>
                            <label className="label">
                                <span className="label-text">Phone</span>

                            </label>
                            <input type="text" name='phone' placeholder="Enter your phone numbre" class="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Education</span>

                            </label>
                            <input type="text" name='education' placeholder="Enter Your address" class="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Address</span>

                            </label>
                            <input type="text" name='address' placeholder="Enter Your address" class="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">LinkedIN Profile Link</span>

                            </label>
                            <input type="text" name='linkedin' placeholder="Enter Your Linked In profile link" class="input input-bordered w-full max-w-xs" />
                            <input type="submit" value={'submit'} class="btn w-full max-w-xs my-7" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;