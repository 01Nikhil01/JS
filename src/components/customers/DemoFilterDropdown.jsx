import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/utils";

const DemoFilterDropdown = ({ filterType, filterOptions }) => {

  return (
  <select className="border-indigo-50">
    {filterOptions.map((options,ind)=><option>{filterType+"-"+options}</option>)}
  </select>   
  );
};

export default DemoFilterDropdown;
