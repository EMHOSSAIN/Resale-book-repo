import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import {toast} from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    
    const {user,createNewuser} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handlesignup=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image=form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,image,email,password)

        createNewuser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            toast.success('You are successfully singup')
            navigate(from, { replace: true });
           
            
        })

        .catch(error=>{
            console.error(error)
        })
        
       
    }
    return (
       <form onSubmit={handlesignup}>
         <div className='mt-6'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content ">
                   <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <h1 class="text-2xl font-bold text-center pt-4">SignUp now!</h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label htmlFor='image' class="label">
                                    <span class="label-text">Image</span>
                                </label>
                                <input name='image' type="file" class="input input-bordered pt-2" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder=" your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder=" your password" class="input input-bordered" />
                              </div>
                               <div class="form-control mt-6">
                                <button class="btn btn-primary">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </form>
    );
};

export default SignUp;