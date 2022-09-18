import Inventory from "./Inventory";

import InventoryView from "./InventoryView";

export default class Interface {
    static instance: Interface;
    inventoryView: InventoryView;

    constructor() {
        if (!Interface.instance) {
            Interface.instance = this;
        }

        return Interface.instance;
    }

    showInterface = () => {
        this.drawInventoryView();
    }

    private drawInventoryView = () => {
        this.inventoryView = new InventoryView();
        // console.log(Inventory.instance);
        const menu = this.inventoryView.getInventoryMenu(Inventory.instance.getData());
        console.log(menu);
        // document.body.appendChild(menu);
    }
}