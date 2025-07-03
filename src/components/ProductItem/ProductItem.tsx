import { addToCart } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);

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
            className="h-4 w-4"
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
              className="h-4 w-4"
            />
          );
        if (showHalfStar)
          return (
            <StarHalf
              fill="#f0b100"
              color="#f0b100"
              key={index}
              className="h-4 w-4"
            />
          );
        return <Star color="#f0b100" key={index} className="h-4 w-4" />;
      }
      return <Star color="#f0b100" key={index} className="h-4 w-4" />;
    });

    return stars;
  };

  const handleAddToCart = () => {
    setLoading(true);
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Added to cart!");
    setLoading(false);
  };

  return (
    <div className="flex flex-col overflow-hidden p-4 bg-white rounded-xl">
      <Link
        className="h-[250px] flex items-center justify-center"
        href={`/product/${product.slug}`}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={300}
          width={300}
          className="rounded-xl max-h-full object-contain"
        />
      </Link>
      <div className="flex flex-col mt-1">
        <Link href={`/product/${product.slug}`}>
          <p className="text-2xl font-medium truncate">{product.title}</p>
        </Link>
        <p className="text-2xl font-bold mt-1">${product.price}</p>

        <div className="flex gap-2 text-sm mt-2">
          <span className="flex text-xs gap-0">
            {generateRatingStars(product.rating)}
          </span>
          ({product.rating})
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-[var(--primary)] hover:bg-[#1574cd] transition-colors ease-in-out duration-300 cursor-pointer rounded-xl text-white p-3 font-semibold text-xl mt-4"
      >
        {loading ? "Processing..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductItem;
