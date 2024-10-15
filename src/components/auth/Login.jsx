import React, { useState } from "react";
import amazonwhitelogo from "../../assets/whiteamazonlogo.png";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFaliure,
  loginRequest,
  loginSuccess,
} from "../../redux/reducer/authReducer";
import axios from "axios";
import { server } from "../../redux/store";
import toast from "react-hot-toast";

const Login = ({ setRegisterPage, registerPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${server}/api/user/login`, userData, {
        //   this will allows cookie to be send and receive
        withCredentials: true,
      });
      console.log(response);
      dispatch(loginSuccess(response?.data));
      toast.success(response?.data?.message);
      setUserData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(loginFaliure(error?.response?.data?.message));
    }
  };
  return (
    <div className=" w-[80%] md:w-[30%]">
      <div className="h-20 w-auto dflex pb-6">
        <img className="h-[100%] w-auto" src={amazonwhitelogo} alt="" />
      </div>
      <div className="text-white flex gap-3 pb-2">
        <p>Not Yet Registered? </p>
        <Link
          onClick={() => setRegisterPage(!registerPage)}
          className="text-[#3de8ff]"
        >
          Register
        </Link>
      </div>
      <form action="" method="post" onSubmit={submitHandler}>
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
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
