import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Популярні страви</h1>
          <a href="#" className="text-[#025cca] text-sm font-semibold">
            Показати всі
          </a>
        </div>
        <div className="overflow-y-scroll h-[680px] scrollbar-thin">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 mt-4 py-4 mx-6"
              >
                <h1 className="text-[#f5f5f5] font-bold text-xl mr-5]">
                  {dish.id < 10 ? "0" + dish.id : dish.id}
                </h1>
                <img src={dish.image} alt="dish" className="w-[50px] h-[50px] rounded-lg" />
                <div className="">
                  <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">{dish.name}</h1>
                  <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
                    <span className="text-[#ababab] ">Замовленнь: </span>
                    {dish.numberOfOrders}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
