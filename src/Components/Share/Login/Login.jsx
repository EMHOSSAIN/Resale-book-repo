import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handlelogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password)
    }


    return (
       <form onSubmit={handlelogin} >
         <div className='mt-6'>
            <div class="hero min-h-screen  bg-base-200">
                <div class="hero-content  ">
                   <div class="card flex-shrink-0 w-full max-w-md shadow-2xl  bg-base-100">
                        <h1 class="text-2xl font-bold text-center pt-4">Login now!</h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder=" your email" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder=" your password" class="input input-bordered" required />
                                <label class="label">
                                   <p >Do not have Account?  < Link className='text-xl text-cyan-700' to='/signin' class="label-text-alt link link-hover">Sign Up</Link> </p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </form>
    );
};

export default Login;