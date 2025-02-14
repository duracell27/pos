import { useState } from "react";
import { menus } from "../../constants";
// import { getRandomColor } from "../../utils";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();

  const dispatch = useDispatch();

  const increaseItemCount = (id) => {
    setItemId(id);
    if (itemCount >= 5) return;

    setItemCount(itemCount + 1);
  };
  const decreaseItemCount = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount(itemCount - 1);
  };

  const handleAddToCart = (menu) => {
    
    if (itemCount === 0) return;
    const {name, price, category} = menu;

    const cartObj = {
      id: new Date(),
      name,
      pricePerUnit: price,
      category,
      quantity: itemCount,
      totalPrice: itemCount * price,
    }

    dispatch(addItems(cartObj));
    setItemCount(0);
    setItemId();
  };

  return (
    <>
      {/* categories */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemCount(0);
                setItemId();
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-xl font-semibold tracking-wide">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id ? <GrRadialSelected className="text-white" size={20} /> : ""}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} шт.</p>
            </div>
          );
        })}
      </div>

      <hr className="border-gray-500 border-t-1 mt-4 ml-3" />

      {/* items of category */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">{menu.name}</h1>
                <button onClick={() => handleAddToCart(menu)} className="bg-[#2e4a40] text-[#02ca3a] rounded-lg cursor-pointer p-2">
                  <FaShoppingCart size={20} className="" />
                </button>
              </div>

              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-xl font-bold">{menu.price} </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] gap-5 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => decreaseItemCount(menu.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &minus;
                  </button>
                  <span className="text-white"> {menu.id === itemId ? itemCount : 0}</span>
                  <button
                    onClick={() => increaseItemCount(menu.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
