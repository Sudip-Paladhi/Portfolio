import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
const AppLayout = () => {

    return(
        <Navbar />
    );
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);