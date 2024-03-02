import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <Router>
      <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
      <Routes />
      <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
    </Router>
  );
}

export default App;
