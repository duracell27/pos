import { useState } from "react";
import OrderCard from "../componets/orders/OrderCard";
import BackButton from "../componets/shared/BackButton";
import BottomNav from "../componets/shared/BottomNav";

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Замовлення</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "all" ? "bg-[#383838]" : ""
            }`}
          >
            Всі
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "progress" ? "bg-[#383838]" : ""
            }`}
          >
            В процесі
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "ready" ? "bg-[#383838]" : ""
            }`}
          >
            Готові
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "completed" ? "bg-[#383838]" : ""
            }`}
          >
            Завершені
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center px-10 py-4 overflow-y-scroll scrollbar-thin h-[calc(100vh-14rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </div>
  );
};

export default Orders;
