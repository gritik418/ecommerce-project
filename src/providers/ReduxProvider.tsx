"use client";
import store from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
