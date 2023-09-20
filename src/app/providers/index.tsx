import React from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export const Provider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
