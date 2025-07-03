"use client";
import CartItem from "@/components/CartItem/CartItem";
import { selectCartItems } from "@/store/slices/cartSlice";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (prev, item) => prev + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-[70vh] py-10 bg-blue-50/50">
      <div className="container flex flex-col lg:flex-row gap-8 mx-auto">
        <div className="flex grow bg-white flex-col rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

          {cartItems && cartItems.length > 0 ? (
            <div className="flex flex-col gap-4 mt-6">
              {cartItems.map(({ product, quantity }) => (
                <CartItem
                  key={product.slug}
                  product={product}
                  quantity={quantity}
                />
              ))}
            </div>
          ) : (
            <div className="py-10 flex items-center flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Your cart is empty!
              </h2>
              <p className="text-lg text-gray-500">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/"
                className="px-6 mt-10 py-2 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {cartItems && cartItems.length > 0 && (
          <div className="bg-white w-full lg:w-[400px] rounded-lg p-4 h-fit">
            <h2 className="text-2xl font-semibold mb-4">Price Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-semibold">Subtotal</span>
              <span className="font-medium text-gray-800">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 font-semibold">Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>
            <div className="flex border-t-2 py-3 border-gray-200 justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <button
              onClick={() => {
                alert("Checkout Clicked.");
              }}
              className="mt-6 w-full bg-[var(--primary)] text-white font-semibold py-2 rounded-lg transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
