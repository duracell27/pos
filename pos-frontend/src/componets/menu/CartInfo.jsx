import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
import { useEffect, useRef } from "react";

const CartInfo = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const scrollRef = useRef();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [cart]);
  return (
    <div className="px-4 py-2">
      <h1 className="text-[#e4e4e4] text-lg font-semibold tracking-wide">Замовлення</h1>
      <div ref={scrollRef} className="mt-4 overflow-y-scroll scrollbar-thin h-[250px]">
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <>
                <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#ababab] text-md font-semibold tracking-wide">{item.name}</h1>
                    <p className="text-[#ababab] text-sm font-medium">x{item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <RiDeleteBin2Fill
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-[#ababab] cursor-pointer"
                        size={20}
                      />
                      <FaCartPlus className="text-[#ababab] cursor-pointer" size={20} />
                    </div>
                    <p className="text-[#f5f5f5] text-md font-bold">{item.totalPrice}</p>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p className="text-[#ababab] flex justify-center items-center h-[250px] text-md font-semibold tracking-wide">
            Ваша кошика порожня
          </p>
        )}
      </div>
    </div>
  );
};

export default CartInfo;
