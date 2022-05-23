import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../Assets/Authentication/signup.jpg'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user || Guser) {
        navigate(from, { replace: true });
    }


    if (loading || Gloading) {
        return <Loading></Loading>
    }

    let signInError;

    if (error || Gerror) {
        signInError = <p className='text-red-500'>{error?.message || Gerror?.message}</p>
    }

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({ displayName: data.name });
        console.log(data.name);

    };
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={signup} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        {/* from  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* field for name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

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
                            {/* field for email */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input  {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[^@]+@[^@]/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                    type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            {/* field for password */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input  {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a valid password'
                                    }
                                })}
                                    type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {signInError}
                            <input className='btn  w-full max-w-xs' type="submit" value={'Sign Up'} />
                        </form>
                        <p><small>Already have an account? <Link to="/login" className='text-primary'>Log In to procced</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;