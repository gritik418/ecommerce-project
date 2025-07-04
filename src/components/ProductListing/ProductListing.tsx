"use client";
import Filters from "@/components/Filters/Filters";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";
import ProductItem from "@/components/ProductItem/ProductItem";
import { selectProducts } from "@/store/slices/productSlice";
import { Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const searchParams = useSearchParams();
  const categorySearchParam = searchParams.get("category");
  const priceSearchParam = searchParams.get("price");
  const searchQuery = searchParams.get("search");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

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
    const prices = products.map((product) => product.price);
    const categories: string[] = ["All"];
    const brands: string[] = [];
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

    if (searchQuery) {
      filtered = filtered.filter((product) => {
        const query = searchQuery.toLowerCase();
        const titleMatch = product.title.toLowerCase().includes(query);
        const brandMatch = product.brand?.toLowerCase().includes(query);
        const categoryMatch = product.category.toLowerCase().includes(query);

        return titleMatch || brandMatch || categoryMatch;
      });
    }

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
  }, [products, filters, searchQuery]);

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
    <>
      <div className="flex min-h-screen bg-blue-50/50">
        <div className="flex container gap-6 mx-auto py-12">
          <div className="sm:flex w-[380px] hidden">
            <Filters
              categories={categories}
              brands={brands}
              maxPrice={maxPrice!}
              minPrice={minPrice!}
              setFilters={setFilters}
              filters={filters}
            />
          </div>

          <div className="flex flex-col grow p-1 w-full gap-5">
            <div className="flex justify-between items-center">
              <h1 className="text-blue-950 text-4xl font-bold">
                Product Listing
              </h1>

              <div
                onClick={() => setShowSidebar(true)}
                className="flex sm:hidden p-2 bg-white rounded shadow"
              >
                <Filter />
              </div>
            </div>
            {searchQuery && (
              <p className="text-lg font-semibold text-gray-600">
                Showing results for:{" "}
                <span className="text-gray-500 font-medium">
                  &apos;{searchQuery}&apos;
                </span>
              </p>
            )}

            {filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-center w-full">
                {filteredProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-40 flex items-center flex-col">
                <p className="text-2xl font-semibold">
                  Sorry, no results found!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSidebar && (
        <FiltersSidebar
          categories={categories}
          brands={brands}
          maxPrice={maxPrice!}
          minPrice={minPrice!}
          setFilters={setFilters}
          filters={filters}
          setShowSidebar={setShowSidebar}
        />
      )}
    </>
  );
};

export default ProductListing;
