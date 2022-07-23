import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = [
  {
    user: 1,
    fname: "آرمین اشتری",
    image: require("../../assets/BustanPic/profile_pic.jpg"),
    time: "12:05",
    content: "برا فردا کی پایه س رفقا؟",
  },
  {
    user: 0,
    time: "12:09",
    content: "من اوکیم اگر دیگران باشند",
  },
  {
    user: 2,
    fname: "Mehrdad.Badri",
    image: require("../../assets/BustanPic/profile_pic2.jpg"),
    time: "12:07",
    content: "من جایی باید باشم اگه تونستم خبر میدم",
  },
  {
    user: 3,
    fname: "Hosein Alavi",
    image: require("../../assets/BustanPic/profile_pic3.jpg"),
    time: "12:05",
    content:
      "من نظرم رو سزخه حصاره الان هوا خوبه زیاد گرم نیست دارابادم خوبه بازم هرچی نظر جمعه",
  },
  {
    user: 0,
    time: "12:00",
    content: "موافقم با سرخه حصار :)",
  },
  {
    user: 0,
    time: "12:00",
    content: "موافقم با سرخه حصار :)",
  },
  {
    user: 0,
    time: "12:00",
    content: "موافقم با سرخه حصار :)",
  },
  {
    user: 0,
    time: "12:00",
    content: "موافقم با سرخه حصار :)",
  },
];

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages(state, action) {
      let content = action.payload;
      console.log(content);
      state.push({ user: 0, time: "12:00", content });
    },
  },
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
