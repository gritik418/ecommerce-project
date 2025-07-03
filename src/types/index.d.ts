interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  brand?: string;
  thumbnail: string;
  images: string[];
  price: number;
  rating: number;
  category: string;
}

interface FilterType {
  minPrice?: number;
  maxPrice?: number;
  category: string;
  brands: string[];
}
