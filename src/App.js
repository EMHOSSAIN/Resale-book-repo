import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Router/Router';
import {Toaster} from 'react-hot-toast'


function App() {                                                                                                                                                      
  return (                          
    <div className='w-10/12 m-auto mt-10 mb-8' >
     <RouterProvider router = {router} ></RouterProvider>
     <Toaster />
   
    </div>
  );
}

export default App;
