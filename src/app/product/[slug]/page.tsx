"use client";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { getProduct, selectSelectedProduct } from "@/store/slices/productSlice";
import { AppDispatch } from "@/store/store";
import { Star, StarHalf } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = ({}: any) => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectSelectedProduct);

  const generateRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const pointValue = rating % 1;
    const showHalfStar = pointValue > 0.25 && pointValue < 0.75;
    const pendingFullStar = pointValue > 0.75;

    const stars = Array.from({ length: 5 }).map((_, index) => {
      if (index < fullStars) {
        return (
          <Star
            key={index}
            fill="#f0b100"
            className="h-6 w-6"
            color="#f0b100"
          />
        );
      }
      if (index === fullStars) {
        if (pendingFullStar)
          return (
            <Star
              fill="#f0b100"
              color="#f0b100"
              key={index}
              className="h-6 w-6"
            />
          );
        if (showHalfStar)
          return (
            <StarHalf
              fill="#f0b100"
              color="#f0b100"
              key={index}
              className="h-6 w-6"
            />
          );
        return <Star color="#f0b100" key={index} className="h-6 w-6" />;
      }
      return <Star color="#f0b100" key={index} className="h-6 w-6" />;
    });

    return stars;
  };

  useEffect(() => {
    dispatch(getProduct(slug));
  }, [slug, dispatch]);

  return (
    <div className="min-h-[80vh] px-4 sm:px-0 py-10">
      <div className="container mx-auto gap-8 flex flex-col sm:flex-row">
        {product?.images && (
          <div className="flex w-full sm:min-w-[50%] lg:min-w-[40%]">
            <ImageGallery images={product.images} />
          </div>
        )}

        <div className="flex flex-col grow p-4 gap-2 bg-white">
          <div className="flex flex-col space-y-1 border-b border-gray-300 py-3">
            <p className="text-base font-semibold text-gray-400 uppercase tracking-wide">
              {product?.brand}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">
              {product?.title}
            </h2>

            <p className="text-sm font-semibold text-gray-500 capitalize">
              Category: {product?.category}
            </p>

            {product?.rating && (
              <div className="flex items-center gap-2 mt-3">
                <span className="flex">
                  {generateRatingStars(product.rating)}
                </span>{" "}
                ({product.rating}){" "}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-2 border-b border-gray-300 pb-3 pt-2">
            <p className="text-xl font-semibold">Special Price</p>

            <p className="text-2xl font-semibold text-primary mt-1">
              ₹{product?.price?.toLocaleString()}
            </p>

            <p>Inclusive of all taxes.</p>
          </div>

          <div className="flex flex-col space-y-2 border-b border-gray-300 pb-3 pt-2">
            <p className="text-xl font-semibold">Description</p>
            <p>{product?.description}</p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="quantity" className="text-sm text-gray-600">
              Qty:
            </label>

            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {Array.from({ length: 10 }, (_, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex mt-7 justify-end gap-4">
            <button className="px-4 py-2 font-semibold cursor-pointer rounded-lg hover:shadow-lg transition-shadow ease-in-out duration-300 shadow">
              Add to Cart
            </button>

            <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300 shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
