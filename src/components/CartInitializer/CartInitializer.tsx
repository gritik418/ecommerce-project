"use client";
import { setCart } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const CartInitializer = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const rawData = localStorage.getItem("cart-data") as string;
    const cartData = JSON.parse(rawData);

    dispatch(setCart({ data: cartData }));
  }, [dispatch]);

  return <></>;
};

export default CartInitializer;
