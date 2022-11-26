import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Model = ({setResaleBook, resaleBook}) => {
    const{user}=useContext(AuthContext)
    const {Name,Resale_Price,Year_of_use,Book_condition}=resaleBook

    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const price = form.price.value;
        const usetime=form.usetime.value;
        const condition=form.condition.value;
        const name=form.name.value;
        const number = form.number.value;
        const location=form.location.value;

        const booking={
            email,
            price,
            usetime,
            condition,
            name,
            number,
            location
        }
        
        console.log(booking)
        setResaleBook(null)
    }
    return (
        <div>
            <input type="checkbox" id="book modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Name}</h3>
                   <form onSubmit={handleSubmit}>
                    
                    <label>Your Email </label>
                   <input name='email' type="text"  disabled value={user?.email} className="input input-bordered w-full mt-3" />
                   <label>Resale Price</label>
                   <input name='price' type="text" disabled value= {Resale_Price} className="input input-bordered w-full mt-3" />
                   <label>Year of use </label>
                   <input name='usetime' type="text" disabled value={Year_of_use} className="input input-bordered w-full mt-3" />
                   <label>Book Condition</label>
                   <input name='condition' type="text" disabled value={Book_condition} className="input input-bordered w-full mt-3" />
                    <input name='name'  type="text" placeholder='Your name' className="input input-bordered w-full mt-3" />
                   <input name='number' type="text" placeholder="Your Mobile Number" className="input input-bordered w-full mt-3" />
                   <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full mt-3" />
                    <input className='btn w-full mt-4' type='submit' value='submit'/>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Model;