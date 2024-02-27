import React, { useState, useRef, Fragment } from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Utils/hero.scss";
import Select from "react-select";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";

import Flatpickr from "react-flatpickr";



import CusSupport from "./CusSupport"
import Holidays from "./Holidays"
import DownloadApp from "./DownloadApp"
import UserCard from "./UserCard"
import Service from "./Service"









function Hero() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [picker, setPicker] = useState(new Date());

  console.table(picker);

  const options = [
    { value: "Karachi", label: "Karachi" },
    { value: "Lahore", label: "Lahore" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Multan", label: "Multan" },
    { value: "Pehsawar", label: "Peshawar" },
    { value: "Quetta", label: "Quetta" },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [adultcount, setadultcount] = useState(0);

  const [childcount, setchildcount] = useState(0);
  const [infantcount, setinfantcount] = useState(0);

  // Function to increment the counter
  const adultincrement = () => {
    setadultcount(adultcount + 1);
  };

  // Function to decrement the counter
  const adultdecrement = () => {
    if (adultcount > 0) {
      setadultcount(adultcount - 1);
    }
  };

  // Function to increment the counter
  const childincrement = () => {
    setchildcount(childcount + 1);
  };

  // Function to decrement the counter
  const childdecrement = () => {
    if (childcount > 0) {
      setchildcount(childcount - 1);
    }
  };

  // Function to increment the counter
  const infantincrement = () => {
    setinfantcount(infantcount + 1);
  };

  // Function to decrement the counter
  const infantdecrement = () => {
    if (infantcount > 0) {
      setinfantcount(infantcount - 1);
    }
  };

  return (



<>

    <div className="overflow-hidden  hero">
      <div className=" flex justify-center  py-4 sm:py-14 ">
        <div className=" px-10 sm:px-0  md:w-[65%]">
          <h1 className="text-white font-bold py-2 text-lg">
            Your travel advisor on your click!
          </h1>
          <div className="bg-white rounded-lg ">
            <Tabs>
              <TabList className="flex bg-[#09559B] w-full rounded-xl">
                <Tab
                  className={`Tab_Bar  ${
                    selectedTabIndex == 0
                      ? "bg-white text-[#09559B] rounded-xl"
                      : ""
                  }`}
                  onClick={() => setSelectedTabIndex(0)}
                >
                  Umrah Packages
                </Tab>
                <Tab
                  className={`Tab_Bar ${
                    selectedTabIndex === 1 ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTabIndex(1)}
                >
                  Flights
                </Tab>
                <Tab
                  className={`Tab_Bar ${
                    selectedTabIndex === 2 ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTabIndex(2)}
                >
                  Hotels
                </Tab>
                <Tab
                  className={`Tab_Bar ${
                    selectedTabIndex === 3 ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTabIndex(3)}
                >
                  Insurance
                </Tab>
                <Tab
                  className={`Tab_Bar ${
                    selectedTabIndex === 4 ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTabIndex(4)}
                >
                  Visa
                </Tab>
                <Tab
                  className={`Tab_Bar rounded-tr-lg ${
                    selectedTabIndex === 5 ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTabIndex(5)}
                >
                  Trips
                </Tab>
              </TabList>

              <div className="px-4 py-2">
                <TabPanel>
                  <div className="flex gap-5 sm:flex-row flex-col">
                    <div className="border-2 p-2 sm:w-[35%] rounded-md">
                      <p className="text-xs sm:text-base text-gray-500">FROM</p>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Lahore"
                        className="border-none outline-none border-transparent"
                      />
                    </div>

                    <div className="border-2 p-2 sm:w-[35%] rounded-md">
                      <div className="flex">
                        <p className="text-xs sm:text-base text-gray-500">
                          DEPART
                        </p>
                        <p className="text-xs sm:px-10  px-14 sm:text-base text-gray-500">
                          RETURN
                        </p>
                      </div>

                      <div>
                        <div>
                          <Flatpickr
                            value={picker}
                            id="multi-dates-picker"
                            color="blue"
                            className="py-2 w-full"
                            placeholder="Select Date"
                            options={{ mode: "multiple", dateFormat: "d-m-Y" }}
                            onChange={(date) => {
                              if (date.length <= 2) {
                                // sirf do dates ko allow karein
                                setPicker(date);
                              } else {
                                setPicker(date.slice(-2)); // agar sirf do latest dates hi chahiye, tab yeh line uncomment kar sakte hain.
                              }
                            }}
                          />
                        </div>

                
                      </div>
                    </div>

                    <div
                      onClick={openModal}
                      className="border-2 p-2 sm:w-[30%]  cursor-pointer rounded-md "
                    >
                      <p className="text-xs sm:text-base text-gray-500">
                        PASSENGERS
                      </p>
                      <div className="mt-2 text-sm">
                        {adultcount == 0
                          ? "SELECT PASSENGERS"
                          : `Adult:${adultcount} , Child:${childcount} , Infant:${infantcount}`}
                      </div>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10 "
                        onClose={closeModal}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-gray-900"
                                >
                                  Passenger
                                </Dialog.Title>
                                <div className="relative p-2 w-full px-5 ">
                                  <div className="app  flex-col   w-[100%] ">
                                    <div className=" border-b border-t items-center flex border-solid justify-between border-gray-500 p-1">
                                      <h1 className="text-base text-gray-600">
                                        Adult
                                        <p className="text-gray-500 text-[9.5px]  ">
                                          (12+ years)
                                        </p>
                                      </h1>

                                      <div className="flex   ml-5 ">
                                        <button
                                          className="bg-gray-200 text-white active:bg-[#09559B]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={adultdecrement}
                                        >
                                          -
                                        </button>
                                        <h2 className="w-6 text-center">
                                          {" "}
                                          {adultcount}
                                        </h2>{" "}
                                        <button
                                          className="bg-[#09559B] text-white mx-1 active:bg-[#09559B]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={adultincrement}
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>

                                    <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                                      <h1 className="text-base text-gray-600">
                                        Child
                                        <p className="text-gray-500 text-[9.5px] ">
                                          (2-11 years)
                                        </p>
                                      </h1>

                                      <div className="flex   ml-5 ">
                                        <button
                                          className="bg-gray-200 text-white active:bg-[#09559B]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={childdecrement}
                                        >
                                          -
                                        </button>
                                        <h2 className="w-6 text-center">
                                          {" "}
                                          {childcount}
                                        </h2>
                                        <button
                                          className="bg-[#09559B] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={childincrement}
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>

                                    <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                                      <h1 className="text-base text-gray-600">
                                        Infant
                                        <p className="text-gray-500 text-[9.5px]  ">
                                          (0-21 months)
                                        </p>
                                      </h1>

                                      <div className="flex   ml-5 ">
                                        <button
                                          className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={infantdecrement}
                                        >
                                          -
                                        </button>

                                        <h2 className="w-6 text-center">
                                          {" "}
                                          {infantcount}
                                        </h2>

                                        <button
                                          className="bg-[#09559B] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={infantincrement}
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>

                  <div className="flex justify-center items-center mt-5">
                    <div className="inline-flex px-14 rounded-md py-2 gap-4 text-white bg-[#4169E1]">
                      <Icon icon="tabler:search" width="24" height="24" />
                      <button>Search</button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Coming Soon</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Coming Soon</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Coming Soon</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Coming Soon</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Coming Soon</h2>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>













    </div>




    <CusSupport/>
<Holidays/>
<DownloadApp/>
<UserCard/>
<Service/>







    </>




  );
}

export default Hero;
