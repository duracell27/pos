import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
        {/* logo */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2">
            <img src={logo} alt="logo" className="size-8" />
            <h1 className="text-lg font-semibold text-[#f5f5f5]">Resto</h1>
        </div>
        {/* search */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
            <FaSearch className=" text-[#f5f5f5]" />
            <input type="text" placeholder="Пошук" className="bg-[#1f1f1f] outline-none text-[#f5f5f5]" />
        </div>
        {/* logged user details */}
        <div className="flex items-center gap-4">
            <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                <FaBell className="text-[#f5f5f5] text-2xl" />
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
                <FaUserCircle className="text-[#f5f5f5] text-2xl" />
                <div className="flex flex-col items-start">
                    <h1 className="text-md text-[#f5f5f5] font-semibold">Володимир Шмідт</h1>
                    <p className="text-sm text-[#f5f5f5] font-medium">адмін</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header