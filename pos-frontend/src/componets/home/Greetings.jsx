import { useEffect, useState } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const month = [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень",
    ];

    return `${month[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`
  };

  const formatTime = (date)=>{
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
  }

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div className="">
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Привіт, Володимир</h1>
        <p className="text-[#ababab] text-sm">Надавай свій сервіс для користувачів 😊</p>
      </div>
      <div className="">
        <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
        <p className="text-[#f5f5f5] text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
