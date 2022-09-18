import Interface from "./Interface";
import Toolbox from "./Toolbox";
import Inventory from "./Inventory";
import {resources} from "../data";
import {IResource} from "../common-types";

export class Game {
    static scale: number;
    static isShowHitbox: boolean;
    static isShowGrid: boolean;
    static isShowHitboxGrid: boolean;
    static instance: Game;

    constructor() {
        if (!Game.instance) {
            Game.instance = this;
        }

        return Game.instance;
    }

    showToolbox = () => (new Toolbox()).showToolbox();
    initInventory = (resourcesMap?: Array<IResource>) => (new Inventory({resources: resourcesMap || resources}))
    showInterface = () => (new Interface()).showInterface();
}

export default Game;
