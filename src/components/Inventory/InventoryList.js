import React from "react";

import style from "./InventoryList.module.css";

import InventorySlot from "./InventorySlot";

const InventoryList = (props) => {

    const toggleEquipment = (id) => {
        return props.onToggleEquipment(id);
    }
    return (
        <div className={style.inventory_list}>
            {props.equipmentItems.map((equipmentItem) => {
                return (
                    <InventorySlot
                        slotItem={equipmentItem}
                        key={equipmentItem.id}
                        onToggleEquipmentSlotList={toggleEquipment}
                    >
                    </InventorySlot>
                );
            })}
        </div>
    );
}

export default InventoryList;