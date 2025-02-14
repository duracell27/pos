import MenuContainer from "../componets/menu/MenuContainer";
import BackButton from "../componets/shared/BackButton";
import BottomNav from "../componets/shared/BottomNav";
import { MdRestaurantMenu } from "react-icons/md";

import CustomerInfo from "../componets/menu/CustomerInfo";
import CartInfo from "../componets/menu/CartInfo";
import Bill from "../componets/menu/Bill";
import { useSelector } from "react-redux";

const Menu = () => {

  const customer = useSelector((state) => state.customer);

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] flex gap-3">
      {/* left div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4 mt-2">
          <div className="flex items-center gap-2">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Меню</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 cursor-pointer">
                <MdRestaurantMenu className="text-[#f5f5f5] text-2xl" />
                <div className="flex flex-col items-start">
                  <h1 className="text-md text-[#f5f5f5] font-semibold">{customer.customerName}</h1>
                  <p className="text-sm text-[#f5f5f5] font-medium">{customer.tableNo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* right div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 rounded-lg pt-0">
        {/* customer info */}
        <CustomerInfo />
        <hr className="border-gray-500 border-t-1 ml-3 mr-3" />
        {/* cart items */}
        <CartInfo />
        <hr className="border-gray-500 border-t-1 ml-3 mr-3" />
        {/* bills */}
        <Bill />
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;
