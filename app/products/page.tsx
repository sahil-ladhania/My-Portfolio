import { products } from "./components/ProductsData";
import { LayoutGrid } from "./components/ProductsGridComponent";

export default function Products() {
    return (
      <div>
        <LayoutGrid cards={products} />
      </div>
    );
}