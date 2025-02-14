import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../../utils";
import { useState } from "react";

const CustomerInfo = () => {
  const [dateTime] = useState(new Date());
  const customer = useSelector((state) => state.customer);
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex flex-col items-start">
        <h1 className="text-[#f5f5f5] text-md font-semibold">{customer.customerName}</h1>
        <p className="text-[#ababab] text-xs font-medium mt-2">{customer.orderId}</p>
        <p className="text-[#ababab] text-xs font-medium mt-2">{formatDate(dateTime)}</p>
      </div>
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        {getAvatarName(customer.customerName)}
      </button>
    </div>
  );
};

export default CustomerInfo;
