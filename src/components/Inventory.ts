import '../styles/inventory.scss';
import {ResourceId, stone} from "./Resource";

const defaultResources = {
    [stone.id]: stone,
};

export class Inventory {
    static instance: Inventory;
    data: Record<ResourceId, number> = {};
    resources = defaultResources;
    onUpdateCb: (id: ResourceId, count: number) => void;

    constructor(onInitCb: () => void = () => {}, onUpdateCb: () => void = () => {},) {
        if (!Inventory.instance) {
            Inventory.instance = this;
            onInitCb();
            this.onUpdateCb = onUpdateCb;
        }

        return Inventory.instance;
    }

    addItem = (id: ResourceId, count: number) => {
        const data = this.getData();
        if (data[id]) {
            this.updateData(id, data[id] + count);
            this.onUpdateCb(id, data[id] + count);
        } else {
            this.updateData(id, count);
            this.onUpdateCb(id, count);
        }
    }

    removeItem = (id: ResourceId, count: number) => {
        if (!this.data[id] || this.data[id] < count) throw new Error(`${id} в инвентаре нет или меньше чем нужно забрать`);
        this.addItem(id, -count);
    }

    getData = () => this.data;
    updateData = (id: ResourceId, count: number) => this.data[id] = count;


}

export default Inventory;
