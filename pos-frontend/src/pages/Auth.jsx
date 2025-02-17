import restaurant from "../assets/images/restaurant-img.jpg";
import logo from "../assets/images/logo.png";
import Register from "../componets/auth/Register";
import Login from "../componets/auth/Login";
import { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      {/* left section  */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* img */}
        <img className="w-full h-full object-cover" src={restaurant} alt="bg" />
        {/* black overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        {/* quote */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias, quod dolorem corrupti
          quibusdam vel?
          <br />
          <span className="block mt-4 text-yellow-400">- John Doe</span>
        </blockquote>
      </div>
      {/* right section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-1">
          <img className="w-14 h-14 border-2 border-white rounded-full p-1" src={logo} alt="logo" />
        </div>
        <h2 className="text-4xl text-center mt-5 font-semibold text-yellow-400 mb-10">
          {isRegister ? "Реєстрація працівника" : "Вхід в систему"}
        </h2>
        {/* components */}
        {isRegister ? <Register /> : <Login />}
        {/* <Register /> */}
        {/* <Login /> */}

        <div className="flex justify-center mt-3">
          {isRegister ? (<><p className="tetx-sm text-[#ababab]">Вже маєте акаунт? </p>
          <span onClick={()=>{setIsRegister(false)}} className="text-yellow-400 font-semibold hover:underline ml-2 cursor-pointer" >
            Вхід
          </span></>):(<><p className="tetx-sm text-[#ababab]">Немає акаунту? </p>
          <span onClick={()=>{setIsRegister(true)}} className="text-yellow-400 font-semibold hover:underline ml-2 cursor-pointer" >
            Реєстрація
          </span></>) }
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
