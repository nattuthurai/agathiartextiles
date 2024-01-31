"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  const [formData, setFormData] = useState({
    name: "",
    emailid: "",
    mobileno: "",
    address: "",
    date: currentDate,
  });

  const [errors, setErrors] = useState({
    name: "",
    emailid: "",
    mobileno: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;

    const newErrors = {
      name: "",
      emailid: "",
      mobileno: "",
      address: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.emailid.trim() === "") {
      newErrors.emailid = "Email ID is required";
      isValid = false;
    }

    if (formData.mobileno.trim() === "") {
      newErrors.mobileno = "Mobile Number is required";
      isValid = false;
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      //console.log("Form submitted:", formData);
      try {
        const response = await axios.post("/api/adduser", formData);
        console.log("Response data:" + response.data);
        router.push("/users");
      } catch (error: any) {
        console.log("Error:" + error.message);
      } finally {
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleCancel = () => {
    // Handle cancel button click logic here
    console.log("Form cancelled");
  };

  return (
    <form className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="emailid"
          className="block text-sm font-medium text-gray-600"
        >
          EmailID:
        </label>
        <input
          type="text"
          id="emailid"
          name="emailid"
          value={formData.emailid}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter EmailID"
        />
        {errors.emailid && (
          <p className="text-red-500 text-sm mt-1">{errors.emailid}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field2"
          className="block text-sm font-medium text-gray-600"
        >
          Mobile Number:
        </label>
        <input
          type="text"
          id="mobileno"
          name="mobileno"
          value={formData.mobileno}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Mobile Number"
        />
        {errors.mobileno && (
          <p className="text-red-500 text-sm mt-1">{errors.mobileno}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-600"
        >
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex-grow bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="flex-grow bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default page;
