import { createBrowserRouter } from "react-router-dom";
import BashBoardLayout from "../BashBoardLayout/BashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import BookShow from "../Pages/BookShow/BookShow";
import Buyer from "../Pages/DeshBord/Buyer/Buyer";
import Home from "../Pages/Home/Home";
import NotFoundData from '../Share/ErrorRouter/NotFoundData'
import Login from "../Share/Login/Login";
import SignUp from "../Share/Signup/SignUp";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

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
            element:<PrivateRouter><BookShow></BookShow></PrivateRouter>,
            loader:({params})=> fetch (` https://server-emhossain.vercel.app/book/${params.id}`)
           }
        ]
       
        
    },
    {
        path:'/dashboard',
        element:<PrivateRouter> <BashBoardLayout></BashBoardLayout> </PrivateRouter>,
        children:[
            {
                path:'/dashboard',
                element:<Buyer></Buyer>
            }
        ]

    },
    {
        path:'*',
        element:<NotFoundData></NotFoundData>
    }

])