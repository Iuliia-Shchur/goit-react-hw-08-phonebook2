import React from "react";
import s from "./HomeView.module.css";

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

const HomeView = () => (
  <div className={s.wrapper}>
    <h1 className={s.typingDemo}>
      Welcome! Here you can add and save your contacts! Try it out!{" "}
    </h1>
  </div>
);

export default HomeView;
