import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
        role: "",
        email: "",
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRoleChange = (selectedRole) => {
        setFormData({
            ...formData,
            role: selectedRole
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Імя працівника</label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="name"
              placeholder="Введіть імя"
              className="bg-transparent flex-1 text-white focus:outline-none"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
        </div>

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
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Телефон працівника</label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              name="phone"
              placeholder="Введіть телефон"
              className="bg-transparent flex-1 text-white focus:outline-none"
              onChange={handleInputChange}
              value={formData.phone}
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

        <div className="">
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Виберіть роль</label>
          <div className="flex items-center gap-3 mt-4">
            {["Guest", "Admin", "Waiter"].map((role) => (
              <button
                type="button"
                className={`${formData.role === role ? 'bg-yellow-400': 'bg-[#1f1f1f] text-[#ababab]'} px-4 py-3 w-full rounded-lg cursor-pointer`}
                key={role}
                onClick={() => handleRoleChange(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-yellow-400 text-[#1f1f1f] font-bold px-4 py-3 w-full rounded-lg mt-4">
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default Register;
