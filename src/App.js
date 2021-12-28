import React from "react";

import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const notify = () => toast("Built by Surya");
    const infoNotify = () => toast.info("info Notification by Surya");
    const errorNotify = () => toast.info("error Notification by Surya");
    const darkNotify = () => toast.info("dark Notification by Surya");


    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <button onClick={infoNotify}>info!</button>
            <button onClick={errorNotify}>error!</button>
            <button onClick={darkNotify}>dark!</button>
            <ToastContainer/>
        </div>
    )
}
export default App;
