import React from "react";

import style from "./Character.module.css";

import CharacterStat from "./CharacterStat";

const Character = (props) => {
    return (
        <div className={style.character} >
            <h2>Character stats</h2>
            <ul className={style.character_stats_list}>
                { props.characterStats.map( (characterStat) => {
                    return (
                        <CharacterStat
                            name={characterStat.name}
                            value={characterStat.value}
                            key={characterStat.name}
                        >
                        </CharacterStat>
                    );
                })
                }
            </ul>
        </div>
    );
}

export default Character;