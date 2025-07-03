import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type PropsType = {
  filters: FilterType;
  brand: string;
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

const BrandSelector = ({ setFilters, filters, brand }: PropsType) => {
  const [isSelected, setIsSelected] = useState<boolean>(
    filters.brands.includes(brand)
  );

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      const brands = filters.brands.filter((val) => brand !== val);
      setFilters((prev) => ({ ...prev, brands }));
      setIsSelected(false);
    } else {
      const brands = [...filters.brands, brand];
      setFilters((prev) => ({ ...prev, brands }));
      setIsSelected(true);
    }
  };
  return (
    <input
      checked={isSelected}
      type="checkbox"
      onChange={handleSelect}
      className="cursor-pointer h-4 w-4 border-gray-400 rounded-full"
    />
  );
};

export default BrandSelector;
