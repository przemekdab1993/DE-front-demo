import React from "react";

import style from "./MenuList.module.css";

import MenuItem from "./MenuItem";

const MenuList = (props) => {

    const activateItem = (id) => {
        return props.onToggleMenu(id);
    }

    return (
        <ul className={style.nav}>
            {props.items.map((item) => {
                return (
                    <MenuItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        className={item.className}
                        active={item.active}
                        onActivateItem={activateItem}
                    />
                );
            })}
        </ul>
    );
}

export default MenuList;