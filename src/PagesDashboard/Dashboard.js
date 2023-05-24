import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import axios from "axios";

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header />
          <section>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div class="grid gap-10 lg:grid-cols-2">
                <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                  <div class="max-w-xl mb-6">
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none">
                      Welcome to Wikusama Cafe<br class="hidden md:block" />
                      Wikusama Cafe adalah sebuah kafe yang terletak di lokasi yang nyaman dan menawarkan pengalaman kuliner yang unik.
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                    Selamat datang di Wikusama Cafe, tempatnya mencicipi kelezatan yang tak terlupakan
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
                <div class="flex items-center justify-center -mx-4 lg:pl-8">
                  <div class="flex flex-col items-end px-3">
                    <img
                      class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="../assets/cafe1.jpeg" alt="" />
                  </div>
                  <div class="px-3">
                    <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="../assets/cafe2.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}