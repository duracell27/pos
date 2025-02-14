import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderId: "N/A",
  customerName: "кінцевий споживач",
  customerPhone: "0508098182",
  guests: 1,
  tableNo: "N/A",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      const { name, phone, guests } = action.payload;
      state.orderId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      state.customerName = name;
      state.customerPhone = phone;
      state.guests = guests;
    },
    removeCustomer: (state) => {
      state.orderId = "";
      state.customerName = "";
      state.customerPhone = "";
      state.guests = 1;
    },
    updateTable: (state, action) => {
      const { tableNo } = action.payload;
      state.tableNo = tableNo;
    },
  },
});

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;
