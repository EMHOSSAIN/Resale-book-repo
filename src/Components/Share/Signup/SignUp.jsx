import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { createNewuser, updateUser } = useContext(AuthContext)
    const [userError, setUserError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handlesignup = event => {
        setUserError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, image, email, password)

        createNewuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserProfile(name)
                saveuser()
                form.reset()
                toast.success('You are successfully singup')
                navigate(from, { replace: true });
               


            })

            .catch(error => {
                setUserError(error.message)
            })


    }

    const handleUpdateUserProfile = (name) => {

        const profile = {

            displayName: name,

        }

        updateUser(profile)
            .then(() => {
               
             })
            .catch(error => {
                console.error(error)
            })
    }

    const saveuser=(name,email)=>{
        const user={name,email};
        fetch(' https://server-emhossain.vercel.app/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           
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
                                    <input name='name' type="text" placeholder="Your name" class="input input-bordered" />
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
                                {
                                    setUserError && <p className='text-xl text-red-600 mt-2'> {userError} </p>
                                }
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