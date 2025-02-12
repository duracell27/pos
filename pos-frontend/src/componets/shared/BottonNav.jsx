import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottonNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-[#262626] h-16 p-2">
      <button className="text-[#ababab] w-[200px] flex items-center justify-center bg-[#343434] rounded-[20px] py-2">
        <FaHome className="inline mr-4" size={20} />
        <p>Головна</p>
      </button>
      <button className="text-[#ababab] w-[200px] flex items-center justify-center">
        <MdOutlineReorder className="inline mr-4" size={20} />
        <p>Замовлення</p>
      </button>
      <button className="text-[#ababab] w-[200px] flex items-center justify-center">
        <MdTableBar className="inline mr-4" size={20} />
        <p>Таблиці</p>
      </button>
      <button className="text-[#ababab] w-[200px] flex items-center justify-center">
        <CiCircleMore className="inline mr-4" size={20} />
        <p>Більше</p>
      </button>
      <button className="bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 absolute items-center bottom-6">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottonNav;
