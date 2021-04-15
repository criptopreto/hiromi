import React from "react";
import Bulding from "./images/bulding.svg";
import logo from "./logo.svg";
import cog from "./images/cog.svg";
import cogi from "./images/cogi.svg";
import "./App.css";

function App() {
  return (
    <div className="flex ">
      <div className="flex-grow-0">
        <img src={logo} alt="" className="sm:h-screen" />
      </div>
      <div className="flex flex-col w-full h-screen">
        <p className="font-bold text-indigo-50 text-3xl text-left">
          Estamos preparando algo grande para ti.
        </p>
        <div className="w-9/12 h-5/6">
          <img
            src={Bulding}
            alt="Preparando"
            className="object-fill h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
