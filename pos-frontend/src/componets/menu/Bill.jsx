import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {
    const cart = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const tips = total * 0.05;
  const totalPrice = total + tips;
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Страв ({cart.length})</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">{total}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Чайові (5%)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">{tips}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Cума з чайовими</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">{totalPrice}</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Готівка
        </button>
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Карта
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">
          Друк чеку
        </button>
        <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold">
          Створити
        </button>
      </div>
    </>
  );
};

export default Bill;
