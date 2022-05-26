import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import login from '../../Assets/Authentication/Login.jpg'
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import google from '../../Assets/buttonIcons/google.png'

const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const [token] = useToken(user || Guser)

    if (token) {
        navigate(from, { replace: true });
    }



    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    if (loading || Gloading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || Gerror) {
        signInError = <p className='text-red-500'>{error?.message || Gerror?.message}</p>
    }


    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={login} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input {...register("email", {
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
                            <input className='btn  w-full max-w-xs' type="submit" value={'LogIN'} />
                        </form>
                        {/* nevigate to register page */}
                        <p><small>New to Hammer And Saw? <Link to="/signup" className='text-primary'>Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">
                            <img src={google} alt="" />
                            <span className='ml-2'> Continue with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

