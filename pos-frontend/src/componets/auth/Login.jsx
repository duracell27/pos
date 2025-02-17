import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });

      const { _id, name, email, phone, role } = data.data;
      dispatch(setUser({ _id, name, email, phone, role }));
      navigate("/");
    },
    onError: (err) => {
      const { response } = err;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Email працівника</label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="email"
              name="email"
              placeholder="Введіть email"
              className="bg-transparent flex-1 text-white focus:outline-none"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
        </div>

        <div className="">
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Пароль</label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="password"
              name="password"
              placeholder="Введіть пароль"
              className="bg-transparent flex-1 text-white focus:outline-none"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>
        </div>

        <button className="bg-yellow-400 text-[#1f1f1f] font-bold px-4 py-3 w-full rounded-lg mt-4">
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;
