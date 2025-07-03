import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type PropsType = {
  filters: FilterType;
  category: string;
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

const CategorySelector = ({ filters, category, setFilters }: PropsType) => {
  const [isSelected, setIsSelected] = useState<boolean>(
    filters.category.toLowerCase() === category.toLowerCase()
  );

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const updated = {
        ...filters,
        category,
      };
      setFilters(updated);
      setIsSelected(true);
    } else {
      const updated = {
        ...filters,
        category: "all",
      };
      setFilters(updated);
      setIsSelected(false);
    }
  };

  useEffect(() => {
    setIsSelected(filters.category.toLowerCase() === category.toLowerCase());
  }, [filters.category]);
  return (
    <div
      className={`relative h-5 w-5 rounded-full ${
        isSelected
          ? "border-4 sm:border-2 outline outline-black sm:outline-white border-black sm:border-white"
          : "border border-gray-700 sm:border-gray-400"
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleSelect}
        className="bg-black z-10 absolute opacity-0 cursor-pointer h-full w-full"
      />
    </div>
  );
};

export default CategorySelector;
