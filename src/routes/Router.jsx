import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "../components/footer/Footer";
import About from "../pages/About";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import Navigation from "../components/navigation/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />

          <Route path="*" exact element={<NotFound />} />

          <Route path="/service" exact element={<Services />} />

          <Route path="/contact" exact element={<Contact />} />
          <Route path="/clients" exact element={<Clients/>} />
        </Routes>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

const ScrollTop = (props) => {
  const { children } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <main className="welcome">{children}</main>;
};

export default Router;
