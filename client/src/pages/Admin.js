import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
import Cart from '../components/Cart';
import Hero from "../components/Hero";
import HomeInfoCards from "../components/home-info-cards";
import About from "../components/About";
import Contact from "../components/Contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../styles/admin.css"


const Admin = () => {
    const userstate = useSelector((state) => state.loginUserReducer);
    const {currentUser} = userstate;
    const dispatch = useDispatch()
    useEffect(() => {
        if(!currentUser.isAdmin){
            window.location.href='/'
        }
    }, [])
  return (
    <div>
       <h1>Admin Control Panel</h1>
       <ul className="admin-nav">
           <li><a href="">Users</a></li>
           <li><a href="">Items</a></li>
           <li><a href="">Add new item</a></li>
           <li><a href="">Orders</a></li>     
       </ul>
    </div>
  );
};

export default Admin;
