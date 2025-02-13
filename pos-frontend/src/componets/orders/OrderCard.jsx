import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[400px] bg-[#262626] rounded-lg p-4 mb-4">
      <div className="flex items-center gap-5 ">
        <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">ВШ</button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Володимир Шмідт</h1>
            <p className="text-[#ababab] text-sm">#101/Dine in</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className=" text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
              <FaCheckDouble className="inline mr-2" /> Готово
            </p>
            <p className="text-[#ababab] text-sm">
              <FaCircle className="inline mr-2 text-green-600" /> Готово для подачі
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-[#ababab]">
        <p>Лютий 18, 2025 08:32</p>
        <p>8 шт.</p>
      </div>
      <hr className="border-gray-500 border-t-1 mt-4 w-full" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-xl font-bold">Сума:</h1>
        <p className="text-[#f5f5f5] text-xl font-bold">250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
