import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import AddAddress from "../components/AddAddress";
import { MdDeliveryDining, MdDelete } from "react-icons/md";

import { motion } from "framer-motion";
// import { removeAddress } from "../redux/addressSlice"; // Import Redux action

const DeliveryInfo = () => {
    const dispatch = useDispatch();
    const addressList = useSelector((state) => state.addresses.addressList);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);


    return (
        <div className="flex flex-col items-center relative">
  {/* Delivery Time */}
  <p className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-black flex items-center">
    Delivery in 9 minutes  
    <motion.span
      className="ml-1 sm:ml-2 text-blue-500 text-sm sm:text-md md:text-lg"
      animate={{ x: [0, 10, 0] }} 
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <MdDeliveryDining />
    </motion.span>
  </p>


            {/* Address Dropdown */}
            <div
                className="flex items-center text-gray-700 text-sm cursor-pointer relative"
                onClick={() => setOpenDropdown(!openDropdown)}
            >
                <FaMapMarkerAlt className="text-green-600 mr-2" />
                <p className="truncate max-w-[200px]">
                    {selectedAddress
                        ? `${selectedAddress.address_line}, ${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pincode}`
                        : "Add Address"}
                </p>
                <GoTriangleDown size={14} className="ml-1" />
            </div>

            {/* Dropdown Menu */}
            {openDropdown && (
                <div className="absolute top-10 left-0 bg-white shadow-md rounded-md w-64 border border-gray-200 z-10">
                    {/* List Addresses */}
                    {addressList && addressList.length > 0 ? (
                        <ul className="max-h-40 overflow-auto">
                            {addressList.map((address) => (
                                <li
                                    key={address.id}
                                    className="flex justify-between p-2 hover:bg-gray-100 cursor-pointer items-center"
                                >
                                    <span
                                        onClick={() => {
                                            setSelectedAddress(address);
                                            setOpenDropdown(false);
                                        }}
                                        className="flex-1 cursor-pointer"
                                    >
                                        {address.address_line}, {address.street}, {address.city}, {address.state} - {address.pincode}
                                    </span>
                                    
                                    {/* Remove Address Button */}
                                
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="p-2 text-gray-500">No saved addresses</p>
                    )}

                    {/* Add Address Button */}
                    <button
                        className="w-full text-left p-2 text-blue-500 hover:bg-gray-100"
                        onClick={() => {
                            setOpenAddressModal(true);
                            setOpenDropdown(false);
                        }}
                    >
                        + Add Address
                    </button>
                </div>
            )}

            {/* Add Address Modal */}
            {openAddressModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        {/* Close Modal */}
                        <button
                            onClick={() => setOpenAddressModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        >
                            ✖
                        </button>
                        <AddAddress close={() => setOpenAddressModal(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeliveryInfo;





