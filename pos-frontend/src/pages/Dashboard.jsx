import { useState } from "react";
import Metrics from "../componets/dashboard/Metrics";
import RecentOrders from "../componets/dashboard/RecentOrders";
import { buttons, tabs } from "../constants";
import Modal from "../componets/dashboard/Modal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Метрики");
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  const handleModalOpen = (action) => {
    if (action === "table") {
      setIsTableModalOpen(true);
    }
  }

  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon: Icon, action }) => (
            <button
              key={label}
              onClick={() => handleModalOpen(action)}
              className="bg-[#1a1a1a] text-[#f5f5f5] hover:bg-[#262626] px-8 py-3 rounded-lg font-semibold cursor-pointer text-base flex items-center gap-2"
            >
              {label}
              <Icon />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"
              } text-[#f5f5f5]  px-8 py-3 rounded-lg font-semibold text-base flex items-center gap-2 cursor-pointer`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "Метрики" && <Metrics />}
      {activeTab === "Замовлення" && <RecentOrders />}
      {activeTab === "Платежі" && <div>Payments</div>}
      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen}/>}
    </div>
  );
};

export default Dashboard;
