import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={()=>navigate(-1)} className="bg-[#f6b100] rounded-lg p-2 text-xl font-bold cursor-pointer">
        <IoArrowBackCircleOutline className="text-[#f5f5f5] text-2xl" />
    </button>
  )
}

export default BackButton