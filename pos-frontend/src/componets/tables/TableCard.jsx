import { FaCheckDouble } from "react-icons/fa";
import PropTypes from "prop-types";
import { getRandomBgColor } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ name, status, initial, seats }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (name) => {
    if (status === "Заброньовано") return;
    dispatch(updateTable({ tableNo: name }));
    navigate(`/menu`);
  };
  return (
    <div
      onClick={() => handleClick(name)}
      className="w-[300px] bg-[#262626] hover:bg-[#2e2e2e] rounded-lg p-4 mb-4 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={` ${
            status === "Заброньовано" ? "text-green-600 bg-[#2e4a40]" : "bg-[#f6b100] text-white"
          } px-2 py-1 rounded-lg`}
        >
          <FaCheckDouble className="inline mr-2" /> {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <h1 className={`${getRandomBgColor()} text-white rounded-full p-5 text-xl`}>{initial}</h1>
      </div>
      <p className="text-[#ababab] text-xs">
        <span className="text-[#ababab] ">Місць: {seats}</span>
      </p>
    </div>
  );
};

TableCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
};

export default TableCard;
