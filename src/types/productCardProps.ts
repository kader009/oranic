export interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating?: number;
  showTag?: boolean;
}
