import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const AppLayout = () => {

    return(
        <>
        <Navbar />
        <Home />
        </>
    );
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);