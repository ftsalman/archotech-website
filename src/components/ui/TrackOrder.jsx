import React, { useState } from "react";
import Button from "./button/Button";
import { InputGroup } from "./InputGroup";

const INITIAL_DATA = {
  email: "",
  trackId: "",
};

export const TrackOrder = ({ onSubmit = () => {} }) => {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData(INITIAL_DATA); // reset after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-4 rounded-xl mx-auto max-w-4xl gap-4"
    >
      {/* Tracking ID Field */}
      <InputGroup
        name="trackId"
        value={formData.trackId}
        onChange={handleChange}
        placeholder="Enter your Tracking ID"
      />

      {/* Email Field */}
      <InputGroup
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />

      {/* Button */}
      <Button
        variant="secondary"
        size="md"
        type="submit"
        className="bg-red-600 text-nowrap hover:bg-red-700 transition-all duration-300 active:scale-95 text-white px-6 py-3 md:px-12 rounded-md font-semibold w-full md:w-auto"
      >
        Track Now
      </Button>
    </form>
  );
};
