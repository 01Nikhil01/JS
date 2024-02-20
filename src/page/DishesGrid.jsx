import { useFilterContext } from "../context/useFilterContext";
import ProductGridCard from "../components/ProductGridCard";
import { getFilteredProducts } from "@/helpers";

export const FoundResultsCount = () => {
  const { categories, maxPrice, minPrice, rating, restaurants, search } =
    useFilterContext();

  const dishes = getFilteredProducts({
    categories,
    maxPrice,
    minPrice,
    rating,
    restaurants,
    search,
  });

  return (
    <h6 className="hidden text-base text-default-950 lg:flex">
      {dishes.length ?? 0} Results Found
    </h6>
  );
};

const DishesGrid = () => {
  const { categories, maxPrice, minPrice, rating, restaurants, search } =
    useFilterContext();

  const dishes = getFilteredProducts({
    categories,
    maxPrice,
    minPrice,
    rating,
    restaurants,
    search,
  });

  return (
    <>
      {dishes.map((dish) => (
        <ProductGridCard key={dish.id} dish={dish} />
      ))}
    </>
  );
};

export default DishesGrid;
