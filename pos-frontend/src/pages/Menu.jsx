import MenuContainer from "../componets/menu/MenuContainer";
import BackButton from "../componets/shared/BackButton";
import BottomNav from "../componets/shared/BottomNav";
import { MdRestaurantMenu } from "react-icons/md";

const Menu = () => {
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
                  <h1 className="text-md text-[#f5f5f5] font-semibold">Володимир Шмідт</h1>
                  <p className="text-sm text-[#f5f5f5] font-medium">Стіл № 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* right div */}
      <div className="flex-[1] bg-blue-500"></div>
      <BottomNav />
    </section>
  );
};

export default Menu;
