import React from "react";

import style from "./EquipmentItem.module.css";

const EquipmentItem = (props) => {

    const toggleEquipment = () => {

        return props.onToggleEquipmentSlot(props.item.id);
    }

    return (
        <div className={style.equipment_Item} onClick={toggleEquipment}>
            <span>{props.item.name}</span><br />
            <span>{props.item.type}</span><br />
            <span>{props.item.used ? 1 : 0}</span><br />
        </div>
    );
}

export default EquipmentItem;
