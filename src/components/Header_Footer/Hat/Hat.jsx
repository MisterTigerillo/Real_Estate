import React from "react";

import { Logo } from "components/Header_Footer/Logo/Logo";
import { Navigation } from "components/Header_Footer/Navigation/Navigation";

import css from "./Hat.module.css";

export const Hat = () => {
  return (
    <div className={css.hat}>
      {" "}
      <Logo />
      <Navigation />
    </div>
  );
};
