import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const UserLogin = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false)
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

    try {
      setLoading(true);
      await toast.promise(
        axios.post(
        "http://localhost:3000/api/auth/user/login",
        formData,
        {withCredentials:true}
      ),
      {
        pending:"Logging in...",
        success:{
          render({data}){
            setTimeout(() => {
              nav("/user/feed");
            }, 2600);
            return "Login successfull!";
          },
        },
        error:{
          render({data}){
            return data.response?.data?.message || "Login failed";
          },
        },
      },
      {
        theme: "dark",
        transition: Slide,
      },
    )
    setformData({ email: "", password: "" });
    }catch (error) {
        console.error(error);
    }finally{
      setLoading(false)
    }
      
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/background/user/ubg-2.webp')] md:bg-[url('/images/background/user/ubg-1.webp')] bg-cover bg-center flex justify-center p-4">
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:h-full md:w-[41%]  bg-[url('/images/background/user/ubg-2.webp')] bg-cover bg-center md:bg-none flex items-center justify-center">
        <div className=" shadow-2xl shadow-amber-900 backdrop-blur-[15px] h-110 w-80 md:w-110 rounded-3xl py-2 px-4">
          <div
            onClick={() => nav("/")}
            className="absolute right-2 bg-orange-200 h-8 w-8 rounded-full flex items-center justify-center text-2xl"
          >
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <h1 className="text-4xl md:text-6xl md:text-center font-[font8] md:text-black text-orange-200 mt-8">
            Login
          </h1>
          <p className="md:text-gray-500 text-gray-200 font-[font5] mb-6 md:text-center">
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
                  className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 md:text-black text-zinc-300 font-[font6] text-xl tracking-[1px]"
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
                  className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 md:text-black text-zinc-300  font-[font6] text-xl tracking-[1px]"
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
    </div>
  );
};

export default UserLogin;
