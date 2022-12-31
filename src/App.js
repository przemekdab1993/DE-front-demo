import React,{useState,} from "react";

import style from './App.module.css';

import Character from "./components/Character/Character";


const CHARACTER_STATS = [
    {name: 'strength', value: 3,},              //siła
    {name: 'perception', value: 3,},            //percepcja
    {name: 'endurance', value: 3,},             //wytrzymałość
    {name: 'harisma', value: 3,},             //charyzma
    {name: 'intelligence', value: 3,},          //inteligencja
    {name: 'agility', value: 3,},              //zręczność
    {name: 'luck', value: 3 }               //szczęście
];

const App = () =>  {

    const [characterStats, setCharacterStats] = useState(CHARACTER_STATS);

    return (
        <div className={style.App}>
            <div className={style.cart}>
                <Character characterStats={characterStats} ></Character>
            </div>
        </div>
    );
}

export default App;
