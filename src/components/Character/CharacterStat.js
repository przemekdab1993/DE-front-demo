import React from "react";

import style from "./CharacterStat.module.css";

const CharacterStat = (props) => {
        return (
            <li
                className={style.character_start_item}
                id={props.id}
            >
            {props.name}:
             <span> {props.value}</span>
        </li>
    );
}

export default CharacterStat;