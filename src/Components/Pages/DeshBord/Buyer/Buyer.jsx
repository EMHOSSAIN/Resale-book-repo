
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

const Buyer = () => {
    const {user}=useContext(AuthContext)

    const url=`http://localhost:5000/buyings?email=${user?.email}`;

    const{data: buyings = [] }=useQuery({
        queryKey:['buyings',user?.email],
        queryFn:  async ()=>{
            const res= await fetch(url)
            const data= await res.json()
            return data;
        }


    })
    return (
        <div className='mt-10'>
            <h1 className='text-2xl text-center'>My Buying Book List</h1>
            <div className="overflow-x-auto mt-7">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Resale price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            buyings.map((buying,i)=>
                            <tr>
                                <th>{i+1}</th>
                                <td>{}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }
                        
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyer;