import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Navigation from "../components/navigation/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
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
