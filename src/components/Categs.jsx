import "../styles/categs.css";
import CategItem from "./CategItem";

import { categories } from "../data";

const Categs = () => {
  return (
    <>
      <div className="container">
        {categories.map((item) => (
          <CategItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Categs;
