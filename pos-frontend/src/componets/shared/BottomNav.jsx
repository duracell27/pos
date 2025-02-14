import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlice";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isModalOpen, setModalIsOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [tableNo, setTableNo] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addGuests = () => {
    if (guestCount >= 6) return;
    setGuestCount(guestCount + 1);
  };
  const removeGuests = () => {
    if (guestCount <= 1) return;
    setGuestCount(guestCount - 1);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleCreateOrder = () => {
    dispatch(setCustomer({name, phone, guests: guestCount}));
    navigate("/tables");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-[#262626] h-16 p-2">
      <button
        onClick={() => navigate("/")}
        className={`flex items-center justify-center font-bold  rounded-[20px] py-2 ${isActiveLink("/") ? "text-[#ababab] w-[200px] bg-[#343434]" : "text-[#ababab] w-[200px] "}`}
      >
        <FaHome className="inline mr-4" size={20} />
        <p>Головна</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`flex items-center justify-center font-bold  rounded-[20px] py-2 ${isActiveLink("/orders") ? "text-[#ababab] w-[200px] bg-[#343434]" : "text-[#ababab] w-[200px] "}`}
      >
        <MdOutlineReorder className="inline mr-4" size={20} />
        <p>Замовлення</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`flex items-center justify-center font-bold  rounded-[20px] py-2 ${isActiveLink("/tables") ? "text-[#ababab] w-[200px] bg-[#343434]" : "text-[#ababab] w-[200px] "}`}
      >
        <MdTableBar className="inline mr-4" size={20} />
        <p>Столи</p>
      </button>
      <button className="text-[#ababab] w-[200px] flex items-center justify-center">
        <CiCircleMore className="inline mr-4" size={20} />
        <p>Більше</p>
      </button>
      <button
        disabled={isActiveLink("/tables") || isActiveLink("/menu")}
        onClick={openModal}
        className="bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 absolute items-center bottom-6"
      >
        <BiSolidDish size={30} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={"Створити замовлення"}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">{`Ім'я гостя`}</label>
          <div className=" flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ім'я гостя"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-2 text-sm font-medium">Номер телефону</label>
          <div className=" flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="0508098182"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="">
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Гостей</label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={removeGuests} className="text-yellow-500 text-2xl cursor-pointer">
              &minus;
            </button>
            <span className="text-white"> {guestCount} людей</span>
            <button onClick={addGuests} className="text-yellow-500 text-2xl cursor-pointer">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            closeModal()
            handleCreateOrder()
          }}
          className="w-full bg-[#f6b100] text-white rounded-lg py-3 mt-6 hover:bg-amber-300"
        >
          Створити замовлення
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
