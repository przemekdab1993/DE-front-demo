import React from "react";

import style from "./InventorySlot.module.css";

import EquipmentItem from "../Equipment/EquipmentItem";

const InventorySlot = (props) => {

    const toggleEquipmentSlot = (id) => {
        return props.onToggleEquipmentSlotList(id);
    }

    return (
        <div className={`${style.inventory_slot} ${props.slotItem.used ? style.active : ''}`}>
            <EquipmentItem
                item={props.slotItem}
                onToggleEquipmentSlot = {toggleEquipmentSlot}
            >
            </EquipmentItem>
        </div>
    );
}

export default InventorySlot;