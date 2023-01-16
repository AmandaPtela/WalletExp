import React from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notification = (message) => {
  toast.success(message,{
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: true,
    theme: "dark"
  });
 }
export default notification;