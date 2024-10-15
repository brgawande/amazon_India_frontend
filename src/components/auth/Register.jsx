import React, { useState } from "react";

import Registerrr from "./Registerrr";
import Login from "./Login";

const Register = () => {
  const [registerPage, setRegisterPage] = useState(true);
  console.log(registerPage);
  return (
    <div className="banner flex justify-center md:justify-end items-center pr-0 md:pr-20">
      {registerPage ? (
        <Registerrr
          setRegisterPage={setRegisterPage}
          registerPage={registerPage}
        />
      ) : (
        <Login setRegisterPage={setRegisterPage} registerPage={registerPage} />
      )}
    </div>
  );
};

export default Register;
