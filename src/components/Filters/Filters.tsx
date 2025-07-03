import { Slider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CategorySelector from "../CategorySelector/CategorySelector";
import BrandSelector from "../BrandSelector/BrandSelector";

type PropsType = {
  setFilters: Dispatch<SetStateAction<FilterType>>;
  filters: FilterType;
  minPrice: number;
  maxPrice: number;
  categories: string[];
  brands: string[];
};

const Filters = ({
  filters,
  setFilters,
  maxPrice,
  minPrice,
  brands,
  categories,
}: PropsType) => {
  const handleChange = (_: Event, val: number | number[]) => {
    if (Array.isArray(val)) {
      const updated: FilterType = {
        ...filters,
        minPrice: val[0],
        maxPrice: val[1],
      };

      setFilters(updated);
    }
  };

  return (
    <div className="sm:bg-[var(--primary)] sm:text-white text-black w-full h-max p-5 rounded-xl space-y-6">
      <h2 className="text-2xl font-semibold">Filters</h2>

      <div className="flex flex-col">
        <p className="text-xl font-semibold mb-3">Category</p>

        <div className="flex flex-col gap-2">
          {categories.map((category) => {
            return (
              <div key={category} className="flex gap-2 items-center">
                <CategorySelector
                  category={category}
                  filters={filters}
                  setFilters={setFilters}
                />
                <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-semibold mb-2">Price</p>

        <div className="px-2">
          <Slider
            value={[
              filters?.minPrice || minPrice,
              filters?.maxPrice || maxPrice,
            ]}
            step={100}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            disableSwap
            sx={{
              "& .MuiSlider-thumb": {
                backgroundColor: "#ffffff",
                border: "2px solid #2563eb",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#e5e7eb",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#bbb",
                height: "6px",
              },
            }}
          />
        </div>

        <div className="flex font-semibold justify-between text-sm">
          <p>{filters?.minPrice || minPrice}</p>
          <p>{filters?.maxPrice || maxPrice}</p>
        </div>
      </div>

      {brands && brands.length > 0 && (
        <div className="flex flex-col">
          <p className="text-xl font-semibold mb-3">Brands</p>

          <div className="flex flex-col gap-2">
            {brands.map((brand) => {
              return (
                <div key={brand} className="flex gap-2 items-center">
                  <BrandSelector
                    brand={brand}
                    filters={filters}
                    setFilters={setFilters}
                  />
                  <p>{brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
