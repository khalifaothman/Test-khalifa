import React from "react";
import css from "./_filterButton.module.scss";

const FilterButton = ({
  name,
  nameKey,
  index,
  filterHandler,
  selected,
}: {
  name: string,
  nameKey: string,
  index: number,
  filterHandler: Function,
  selected:boolean
}) => {
  return (
    <div>
      <button
        onClick={() => {
          filterHandler(index);
        }}
        className={selected ? `${css.button} ${css.selected}` : `${css.button}`}
      >
        {nameKey}
      </button>
    </div>
  );
};

export default FilterButton;
