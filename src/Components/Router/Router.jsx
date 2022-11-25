import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import BookShow from "../Pages/BookShow/BookShow";
import Home from "../Pages/Home/Home";
import NotFoundData from '../Share/ErrorRouter/NotFoundData'
import Login from "../Share/Login/Login";
import SignUp from "../Share/Signup/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
         element:<Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signin',
            element:<SignUp></SignUp>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/category/:id',
            element:<BookShow></BookShow>,
            loader:({params})=> (`http://localhost:5000/book/${params.id}`)
           }
        ]
        
    },
    {
        path:'*',
        element:<NotFoundData></NotFoundData>
    }

])