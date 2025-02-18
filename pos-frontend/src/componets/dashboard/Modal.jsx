import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { addTable } from "../../https";
import { useMutation } from "@tanstack/react-query";
const Modal = ({ setIsTableModalOpen }) => {
  const [formData, setFormData] = useState({
    tableNo: "",
    seats: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    tableMutation.mutate(formData);
  };

  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: () => {
      setIsTableModalOpen(false);
      enqueueSnackbar("Стіл успішно доданий", { variant: "success" });
    
    },
    onError: (err) => {
      const { response } = err;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#f5f5f5]">Додати стіл</h2>
          <button onClick={handleCloseModal} className="text-[#f5f5f5] hover:text-red-500 cursor-pointer">
            <IoMdClose size={20} />
          </button>
        </div>

        {/* modal body */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-10">
          <div className="">
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Номер столу</label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
              <input
                type="number"
                name="tableNo"
                placeholder="Введіть номер столу"
                className="bg-transparent flex-1 text-white focus:outline-none"
                onChange={handleInputChange}
                value={formData.tableNo}
              />
            </div>
          </div>

          <div className="">
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Кількість гостей</label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
              <input
                type="number"
                name="seats"
                placeholder="Введіть кількість гостей"
                className="bg-transparent flex-1 text-white focus:outline-none"
                onChange={handleInputChange}
                value={formData.seats}
              />
            </div>
          </div>
          <button className="bg-yellow-400 text-[#1f1f1f] font-bold px-4 py-3 w-full rounded-lg mt-4">
            Додати стіл
          </button>
        </form>
      </motion.div>
    </div>
  );
};

Modal.propTypes = {
  setIsTableModalOpen: PropTypes.func.isRequired,
};

export default Modal;
