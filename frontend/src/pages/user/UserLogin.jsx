import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const UserLogin = () => {
  const nav = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      return toast.error("Password should be min 8 char", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        style: {
          fontFamily: "font8",
          letterSpacing: "1px",
        },
      });
    }

    if (!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      return toast.error("Password should contain special char", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        style: {
          fontFamily: "font8",
          letterSpacing: "1px",
        },
      });
    }

    if (!/[A-Z]/.test(formData.password)) {
      return toast.error("Password should contain atleast one uppercase", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        style: {
          fontFamily: "font8",
          letterSpacing: "1px",
        },
      });
    }

    try {
      const res = await axios.post(
        "https://localhost:3000/api/auth/user/login",
        formData,
      );
      toast.success("Loggedin successfully!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      setformData({
        email: "",
        password: "",
      });
      setTimeout(() => {
        nav("/user/feed");
      }, 2600);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
    setformData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/background/user/image.png')] md:bg-[url('/images/background/user/image.png')] bg-cover bg-center flex justify-center p-4">
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:top-1/2 md:left-auto md:right-5 shadow-2xl shadow-amber-900 backdrop-blur-[15px] h-110 w-80 md:w-110 rounded-3xl py-2 px-4">
        <div
          onClick={() => nav("/")}
          className="absolute right-2 bg-orange-200 h-8 w-8 rounded-full flex items-center justify-center text-2xl"
        >
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <h1 className="text-4xl md:text-6xl md:text-center font-[font8] text-black mt-8">
          Login
        </h1>
        <p className="text-gray-300 font-[font5] mb-6 md:text-center">
          or{" "}
          <span
            onClick={() => nav("/user/register")}
            className="text-orange-500 text-2xl md:text-3xl font-[font7] cursor-pointer"
          >
            create an account
          </span>
        </p>
        <div className="w-full h-70">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="rounded-2xl font-[font8] text-2xl tracking-[1px] w-full bg-orange-500 hover:bg-orange-600 text-white py-4 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
