import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {

    const {login,googlesignup}=useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handlelogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            toast.success('you are successfully login ')
            navigate(from, { replace: true });
        })
        .catch(error=>{
            toast.error('Wrong Authentication.Try again')
        })

    }

    const googleprovider=new GoogleAuthProvider()
    const handleGoogle =()=>{
        googlesignup(googleprovider)
        .then(result=>{
            const user = result.user
           console.log(user)
           toast.success('Successfully GoogleLogin')
        })
        .catch(error=>{
            console.log(error)
        })

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
                                   <p >Do not have Account?  < Link to='/signin' class="label-text-alt link link-hover text-2xl text-cyan-700">Sign Up</Link> </p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                                <button onClick={handleGoogle} class="btn btn-ghost mt-4">Google</button>
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