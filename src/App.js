import React from "react";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Team from "./components/Team/Team";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="body-bg">
      <MyNavbar></MyNavbar>
      <Header></Header>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default App;
