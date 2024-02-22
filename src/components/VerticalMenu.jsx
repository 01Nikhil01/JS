import React from "react";
import { LuChevronDown, LuDot, LuLayoutGrid } from "react-icons/lu";
import { cn } from "@/utils";
import { NavLink } from "react-router-dom";

const VerticalMenu = ({ menuItems }) => {
  return (
    <ul className="admin-menu hs-accordion-group flex w-full flex-col gap-1.5 p-4">
      {menuItems.map((item, index) => (
        <li key={index} className="">
          {item.children ? (
            <>
              <MenuItemWithChildren item={item} />
            </>
          ) : (
            <MenuItemLink item={item} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default VerticalMenu;

const MenuItemLink = ({ item }) => {
  const Icon = item.icon ?? LuDot;
  return (
    <NavLink
      className={cn(
        "flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100 group-[.active]:bg-primary/10"
        // { "bg-red-400": { isActive } && item.url }
      )}
      // style={({ isActive }) => {
      //   return { color: isActive && item.url ? "green" : "blue" };
      // }}
      to="#"
      target={item.target}
      data-menu-key={item.key}
      end
    >
      <Icon size={item.icon ? 20 : 24} />
      {item.label}
    </NavLink>
  );
};

function MenuItemWithChildren({ item }) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div
        className="flex justify-between items-center pr-4 rounded-md hover:bg-default-100"
        onClick={() => setToggle(!toggle)}
      >
        <MenuItemLink item={item} />
        <LuChevronDown className={cn("", { "rotate-180": toggle })} />{" "}
      </div>
      {toggle && (
        <ul>
          {item.children.map((child, index) => (
            <MenuItemLink item={child} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}
