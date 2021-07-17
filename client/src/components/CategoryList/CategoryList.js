import React from "react";
import "./CategoryList.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryList = () => {
  return (
    <div className="categoryWrapper">
      <CategoryItem title="food And Beverages" amount="321.6" percent="47.4" />
      <CategoryItem title="groceries" amount="321.6" percent="21.4" />
      <CategoryItem title="Utilities" amount="321.6" percent="14.4" />
      <CategoryItem title="automobile" amount="321.6" percent="16.4" />
      <CategoryItem title="other" amount="209.4" percent="9.1" />
    </div>
  );
};

export default CategoryList;
