import React, { useState } from "react";
import amazonwhitelogo from "../../assets/whiteamazonlogo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  registerFaliure,
  registerRequest,
  registerSuccess,
} from "../../redux/reducer/authReducer";
import axios from "axios";
import { server } from "../../redux/store";
import toast from "react-hot-toast";

const Registerrr = ({ setRegisterPage, registerPage }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(registerRequest());
    try {
      const response = await axios.post(
        `${server}/api/user/register`,
        userData
      );
      //   console.log(response);
      dispatch(registerSuccess(response.data));
      toast.success(response?.data?.message);
      setUserData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      dispatch(registerFaliure(error.response.data.message));
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className=" w-[80%] md:w-[30%]">
      <div className="h-20 w-auto dflex pb-6">
        <img className="h-[100%] w-auto" src={amazonwhitelogo} alt="" />
      </div>
      <div className="text-white flex gap-3 pb-2">
        <p>Already a User? </p>
        <Link
          onClick={() => setRegisterPage(!registerPage)}
          className="text-[#3de8ff]"
        >
          SignIn
        </Link>
      </div>
      <form action="" method="post" onSubmit={submitHandler}>
        <div className="py-3">
          <input
            className="inputc"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            id=""
          />
        </div>
        <div className="py-3">
          <input
            className="inputc"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            id=""
          />
        </div>
        <div className="py-3">
          <input
            className="inputc"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            id=""
          />
        </div>
        <div className="py-3">
          <input
            className="inputc"
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Enter Your Number"
            id=""
          />
        </div>
        <div className="py-3">
          <Button
            type="submit"
            style={{
              width: "100%",
              fontWeight: "bold",

              backgroundColor: "white",
              color: "black",
            }}
            variant="contained"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registerrr;
