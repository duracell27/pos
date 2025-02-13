import { useState } from "react";
import BackButton from "../componets/shared/BackButton";
import BottomNav from "../componets/shared/BottomNav";
import TableCard from "../componets/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Столи</h1>
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
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "booked" ? "bg-[#383838]" : ""
            }`}
          >
            Заброньовано
          </button>

        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center px-10 py-4 overflow-y-scroll scrollbar-thin h-[calc(100vh-14rem)]">
       {
        tables.map((table) => {
          return (
            <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initial={table.initial} seats={table.seats} />
          );
        })
       }
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
