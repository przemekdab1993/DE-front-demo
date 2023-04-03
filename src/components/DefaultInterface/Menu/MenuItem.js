import React from "react";

import style from "./MenuItem.module.css"

const MenuItem = (props) => {

  const activeItemChandler = (event) => {

    event.preventDefault();
    const itemId = event.target.id;

    return props.onActivateItem(itemId);
  }

  return (
    <li className={style.nav_item}>
      <a
        id={props.id}
        className={`${style.nav_link} ${props.className} ${props.active ? style.active : ''}`}
        href="#"
        onClick={activeItemChandler}
      >
        {props.name}
      </a>
    </li>
  );
}

export default MenuItem;