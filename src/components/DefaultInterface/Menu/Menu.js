import React from "react";

import style from "./Menu.module.css";

import MenuList from "./MenuList";

const Menu = (props) => {

  const menuItemActive = (id) => {
    return props.onToggleMenuItem(id);
  }

  return (
    <div className={style.main_menu_nav}>
      <MenuList
        items={props.menuItems}
        onToggleMenu={menuItemActive}
      />
    </div>
  );
}

export default Menu;