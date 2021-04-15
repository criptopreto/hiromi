import React from "react";
import Bulding from "./images/bulding.svg";
import logo from "./logo.svg";
import cog from "./images/cog.svg";
import cogi from "./images/cogi.svg";
import "./App.css";

function App() {
  return (
    <div
      className="h-screen pb-2 bg-right bg-cover bg-fixed bg-hiromi"
      style={{
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/hiromito-go.appspot.com/o/header.webp?alt=media&token=11a8248a-bd78-45a9-a22d-ea3947f14b90")`,
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="w-full container mx-auto p-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"></div>
            <div className="flex w-1/2 justify-end content-center">
              <a
                href="https://www.instagram.com/hiromisushive/"
                target="_blank"
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  className="fill-current h-6"
                  viewBox="0 0 169.063 169.063"
                >
                  <g>
                    <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                    <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                    <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container pt-2 md:pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <div className="flex">
              <img src={logo} className="h-36 pl-5 md:h-60" alt="" />
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Estamos preparando algo grande para ti
              </h1>
            </div>
          </div>
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              src={Bulding}
              alt="Construction"
              className="mx-auto w-full md:w-4/5 transform -scale-50 transition duration-700 ease-in-out hover:scale-105"
            />
          </div>
        </div>
        <div className="w-full pt-16 text-sm md:text-left fade-in text-gray-50">
          <div className="container mx-auto w-full text-center">
            <span>Hiromi © Todos los Derechos Reservados - 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
