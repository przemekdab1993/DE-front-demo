import React,{useState,} from "react";

import style from "./App.module.css";

import Character from "./components/Character/Character";
import Inventory from "./components/Inventory/Inventory";
import Card from "./components/DefaultInterface/Card";
import Menu from "./components/DefaultInterface/Menu/Menu";

const CHARACTER_STATS = [
    {id: 'cs0001', name: 'strength', value: 3,},              //siła
    {id: 'cs0002',name: 'perception', value: 3,},            //percepcja
    {id: 'cs0003',name: 'endurance', value: 3,},             //wytrzymałość
    {id: 'cs0004',name: 'harisma', value: 3,},             //charyzma
    {id: 'cs0005',name: 'intelligence', value: 3,},          //inteligencja
    {id: 'cs0006',name: 'agility', value: 3,},              //zręczność
    {id: 'cs0007',name: 'luck', value: 3 }               //szczęście
];

const EQUIPMENT_ITEMS = [
    {
        id: 'eq0001',
        name: 'knife',
        type: 'weapon',
        stats: {
            strength: 2,
            harisma: 1
        },
        used: false
    },
    {
        id: 'eq0002',
        name: 'bucket',
        type: 'headgear',
        stats: {
            luck: -2,
            harisma: 5
        },
        used: false
    },
    {
        id: 'eq0003',
        name: 'bow',
        type: 'weapon',
        stats: {
            strength: 4,
            agility: 2
        },
        used: false
    },
    {
        id: 'eq0004',
        name: 'shield',
        type: 'shield',
        stats: {
            endurance: 4,
            agility: -1
        },
        used: false
    },
    {
        id: 'eq0005',
        name: 'torn shoes',
        type: 'shoes',
        stats: {
            perception: 3,
            harisma: 1
        },
        used: false
    },
    {
        id: 'eq0006',
        name: 'torn shoes',
        type: 'shoes',
        stats: {
            perception: 3,
            harisma: 1
        },
        used: false
    }
];

const MENU_ITEMS = [
  {
    id: 'menu1',
    name: 'Home',
    className: null,
    active: false
  },
  {
    id: 'menu2',
    name: 'Inventory',
    className: null,
    active: false
  },
  {
    id: 'menu3',
    name: 'Adventure',
    className: null,
    active: false
  },
  {
    id: 'menu4',
    name: 'Stats',
    className: null,
    active: false
  },
];

const App = () =>  {

    const [characterStats, setCharacterStats] = useState(CHARACTER_STATS);
    const [equipmentItems, setEquipmentItems] = useState(EQUIPMENT_ITEMS);
    const [menuItems, setMenuItems] = useState(MENU_ITEMS);


    const toggleMenuChandler = (itemId) => {
        setMenuItems((prevMenuItems) => {
            const newStateMenu = prevMenuItems.map((item) => {
                if (item.id === itemId) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });

            return newStateMenu;
        });
    }

    const updatedCharacterStats = (stats , add = true) => {

        let newCharacterStats = characterStats;

        for (const statKey in stats) {
            newCharacterStats = characterStats.map((stat) => {
                console.log(stat.name);
                if (stat.name == statKey) {
                    if (add) {
                        stat.value = stat.value + stats[statKey];
                    } else {
                        stat.value = stat.value - stats[statKey];
                    }
                }
                return stat;
            })
        }

        setCharacterStats(newCharacterStats);
    }

    const toggleUsedEquipment = (id) => {
        let statsEquipment;
        let toggleUp = true;

        let eq = equipmentItems.map((item) => {
            if (item.id === id) {

                if (item.used) {
                    toggleUp = false;
                }
                item.used = !(item.used);
                statsEquipment = item.stats;
            }
            return item;
        });

        updatedCharacterStats(statsEquipment, toggleUp);

        setEquipmentItems(eq);
    }

    return (
        <div className={style.App}>
            <Menu
                menuItems={menuItems}
                onToggleMenuItem={toggleMenuChandler}
            />

            <Card className={style.cart1}>
                <Character characterStats={characterStats} ></Character>
            </Card>
            <Card className={style.cart2}>
                <Inventory
                    equipmentItems = {equipmentItems}
                    onToggleEquipmented = {toggleUsedEquipment}
                >
                </Inventory>
            </Card>
        </div>
    );
}

export default App;
