import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ product, quantity }: CartItem) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ slug: product.slug }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ slug: product.slug }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ slug: product.slug }));
  };

  return (
    <div className="rounded-xl flex gap-4 overflow-hidden p-4 shadow">
      <Link
        href={`/product/${product.slug}`}
        className="flex items-center max-h-[140px] h-full w-20 sm:w-30 justify-center"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={80}
          className="rounded-lg border w-full h-full object-contain"
        />
      </Link>

      <div className="flex flex-col grow justify-between">
        <div className="flex flex-col">
          {product.brand && (
            <p className="text-xs font-semibold text-gray-500">
              {product.brand}
            </p>
          )}

          <p className="mt-1 text-lg">{product.title}</p>

          <p className="mt-2 text-xl">
            ₹{(product.price * quantity).toLocaleString()}
          </p>
        </div>

        <div className="flex items-baseline mt-6 justify-between">
          <div className="flex gap-2">
            <div
              onClick={handleDecrement}
              className="flex bg-gray-200 cursor-pointer rounded-full p-1"
            >
              <Minus className="h-4 w-4" />
            </div>

            <div className="flex">{quantity}</div>

            <div
              onClick={handleIncrement}
              className="flex bg-gray-200 cursor-pointer rounded-full p-1"
            >
              <Plus className="h-4 w-4" />
            </div>
          </div>

          <div className="flex">
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-50 flex cursor-pointer items-center gap-1 text-red-800 font-semibold p-2 rounded-lg"
            >
              <Trash className="h-4 w-4" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
