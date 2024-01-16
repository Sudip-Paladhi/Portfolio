import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
const AppLayout = () => {

    return(
        <>
        <Navbar />
        <Home />

        <SocialLinks />
        <About />
        <Portfolio />
        </>
    );
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);