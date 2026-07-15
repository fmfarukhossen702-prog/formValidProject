import React, { useState } from "react";
import Antigravity from "./AntigravityInner ";

const Form = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;
  const passwordRule = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    special: /[@$!%*?&.#]/.test(password),
    number: /\d/.test(password),
  };

  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (email == "") {
      setEmailError("Pleace enter your Email.");
    } else {
      let emailValid = emailRegex.test(email);
      if (!emailValid) {
        setEmailError("Enter a valid email.");
      }
    }
    if (password == "") {
      setPasswordError("Pleace enter your Password");
    } else {
      let passwordValid = passwordRegex.test(password);
      if (!passwordValid) {
        setPasswordError("Password does not meet all the requirements.");
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <Antigravity
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#5227FF"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />
      <div className=" absolute top-0 left-0 w-full ">
        <div className="w-full h-full  flex justify-center items-center text-white">
        <form className=" pt-10  ">
          <div className="mb-7  h-25">
            <label
              htmlFor="email"
              className="block mb-2.5 text-lg font-semibold text-heading"
            >
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className=" w-80 bg-neutral-secondary-medium border rounded-[10px] focus:bg-[#ffffff1a] border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="enter your email"
              required
            />
            <p className="mt-2 text-[13px] text-red-700 ml-2 ">{emailError}</p>
          </div>
          <div className="mb-9 h-28">
            <label
              htmlFor="password"
              className="block mb-2.5 text-lg font-semibold text-heading"
            >
              Your password
            </label>
            <div className=" relative ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                id="password"
                className=" w-80 bg-neutral-secondary-medium border border-default-medium rounded-[10px] focus:bg-[#ffffff1a] text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="enter your password"
              />
              <div
                onClick={() => setShow(!show)}
                className=" absolute top-1/2 -translate-y-[50%] right-4 "
              >
                {show ? (
                  <i className="fa-solid fa-eye-slash" />
                ) : (
                  <i className="fa-regular fa-eye" />
                )}
              </div>
            </div>
            <p className="mt-2 w-78 h-3 text-red-700 text-[13px] ml-2 text-justify ">
              {passwordError}
            </p>
            <ul className=" mt-3 flex  flex-col gap-0.5 list-disc  ml-6 ">
              <li
                className={`${
                  passwordRule.length
                    ? " marker:text-green-500 "
                    : "marker-text-white"
                } text-[14px]`}
              >
                At least 8 characters
              </li>
              <li
                className={`${
                  passwordRule.number
                    ? " marker:text-green-500 "
                    : "marker-text-white"
                } text-[14px]`}
              >
                At least 1 number{" "}
              </li>
              <li
                className={`${
                  passwordRule.lowerCase
                    ? " marker:text-green-500 "
                    : "marker-text-white"
                } text-[14px]`}
              >
                At least 1 lowercase{" "}
              </li>
              <li
                className={`${
                  passwordRule.upperCase
                    ? " marker:text-green-500 "
                    : "marker-text-white"
                } text-[14px]`}
              >
                At least 1 uppercase{" "}
              </li>
              <li
                className={`${
                  passwordRule.special
                    ? " marker:text-green-500 "
                    : "marker-text-white"
                } text-[14px]`}
              >
                At least 1 special character{" "}
              </li>
            </ul>
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="text-white mt-27 bg-brand box-border border border-[#ffffff3f] focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[10px] text-sm px-4 py-2.5 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default Form;
