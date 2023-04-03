import React from "react";

import style from "./Inventory.module.css";

import InventoryList from "./InventoryList";

const Inventory = (props) => {

    const toggleEquipmentList = (id) => {
        return props.onToggleEquipmented(id);
    }
    return (
        <div className={style.inventory}>
            <h3>Inventory</h3>
            <InventoryList
                equipmentItems = {props.equipmentItems}
                onToggleEquipment = {toggleEquipmentList}
            >
            </InventoryList>
        </div>
    );
}

export default Inventory;