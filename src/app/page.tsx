"use client";
import Filters from "@/components/Filters/Filters";
import { selectProducts } from "@/store/slices/productSlice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const searchParams = useSearchParams();
  const categorySearchParam = searchParams.get("category");
  const priceSearchParam = searchParams.get("price");

  const products = useSelector(selectProducts);
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterType>({
    category: "all",
    brands: [],
  });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    let filtered = products;
    let prices = products.map((product) => product.price);
    let categories: string[] = ["All"];
    let brands: string[] = [];
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
      if (product?.brand) {
        if (!brands.includes(product.brand)) {
          brands.push(product.brand);
        }
      }
    });
    setCategories(categories);
    setBrands(brands);

    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));

    if (filters?.minPrice !== undefined) {
      filtered = filtered.filter(
        (product) => product.price >= filters.minPrice!
      );
    }

    if (filters?.maxPrice !== undefined) {
      filtered = filtered.filter(
        (product) => product.price <= filters.maxPrice!
      );
    }

    if (filters.category && filters.category.toLowerCase() !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product?.brand || "")
      );
    }
    setFilteredProducts(filtered);
  }, [products, filters]);

  useEffect(() => {
    if (categorySearchParam) {
      setFilters((prev) => ({
        ...prev,
        category: categorySearchParam,
      }));
    }
    if (priceSearchParam) {
      const prices = priceSearchParam.split("-");
      if (prices.length === 2) {
        const min = Number(prices[0]);
        const max = Number(prices[1]);

        if (!isNaN(min) && !isNaN(max)) {
          setFilters((prev) => ({
            ...prev,
            minPrice: min,
            maxPrice: max,
          }));
        }
      }
    }
  }, [priceSearchParam, categorySearchParam]);

  return (
    <div className="flex min-h-screen bg-blue-50">
      <div className="flex container gap-6 mx-auto py-12">
        <div className="flex w-[300px]">
          <Filters
            categories={categories}
            brands={brands}
            maxPrice={maxPrice!}
            minPrice={minPrice!}
            setFilters={setFilters}
            filters={filters}
          />
        </div>

        <div className="flex flex-col grow p-1">
          <h1 className="text-blue-950 text-4xl font-bold">Product Listing</h1>

          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
}
