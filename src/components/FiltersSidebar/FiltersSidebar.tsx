import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Filters from "../Filters/Filters";

type PropsType = {
  setFilters: Dispatch<SetStateAction<FilterType>>;
  filters: FilterType;
  minPrice: number;
  maxPrice: number;
  categories: string[];
  brands: string[];
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const FiltersSidebar = ({ setShowSidebar, ...props }: PropsType) => {
  return (
    <div className="flex flex-col p-4 sm:hidden absolute top-0 bg-white max-w-[340px] h-screen w-[80%]">
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Logo</h1>

        <div className="flex" onClick={() => setShowSidebar(false)}>
          <X />
        </div>
      </div>

      <Filters {...props} />
    </div>
  );
};

export default FiltersSidebar;
