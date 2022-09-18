import '../styles/inventory.scss';
import {IResource, Resource} from "./../common-types";

interface ConstructorArgs {
    onInit?: () => void;
    onUpdate?: () => void;
    resources: Array<IResource>;
}

export type InventoryData = Partial<Record<Resource, number>>;

export class Inventory {
    static instance: Inventory;
    private data: InventoryData = {};
    onUpdate: (id: Resource, count: number) => void;
    resources: Array<IResource> = [];

    constructor(args: ConstructorArgs) {
        if (!Inventory.instance) {
            const {
                resources,
                onUpdate = () => null
            } = args;

            Inventory.instance = this;
            this.resources = resources;
            this.onUpdate = onUpdate;
            this.init();
        }

        return Inventory.instance;
    }

    readonly addItem = (id: Resource, count: number) => {
        const data = this.getData();
        if (data[id]) {
            this.updateData(id, data[id] + count);
            this.onUpdate(id, data[id] + count);
        } else {
            this.updateData(id, count);
            this.onUpdate(id, count);
        }
    }

    readonly removeItem = (id: Resource, count: number) => {
        if (!this.data[id] || this.data[id] < count) throw new Error(`${id} в инвентаре нет или меньше чем нужно забрать`);
        this.addItem(id, -count);
    }

    init = () => {
        this.resources.forEach(resource => {
            this.addItem(resource.id, 0);
        })
    }
    getData = () => this.data;
    updateData = (id: Resource, count: number) => this.data[id] = count;


}

export default Inventory;
