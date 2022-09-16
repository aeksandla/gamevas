import {libraryPrefix, libraryPrefixClass} from "../constants";
import GamevasJSX from "../GamevasJSX";
import {Resource, ResourceId} from "./Resource";
import Inventory from "./Inventory";

const inventoryMenu = `${libraryPrefix}-inventory-menu`;

export class InventoryView {

    getInventoryMenu = (data: Record<ResourceId, number>) => {
        const getResourceInfo = (id: ResourceId) => Inventory.instance.resources[id];

        return <div className={`${libraryPrefix}-inventory-menu`}>
            {
                Object.entries(data).map(([id, count]) => this.createCard({
                    count,
                    ...getResourceInfo(id),
                }))
            }
        </div>
    }

    createCard = ({count, name, image, id}: Resource & {count: number}) => {
        return <div className={`${libraryPrefix}-inventory-card ${libraryPrefix}-inventory-card_id_${id}`}>
            <div className={`${libraryPrefix}-inventory-card__name`}>{name}</div>
            <img className={`${libraryPrefix}-inventory-card__image`} src={image}/>
            <div className={`${libraryPrefix}-inventory-card__count`}>{count}</div>
        </div>
    }

    updateCard = (id: ResourceId, newCount: number) => {
        const card = document
            .querySelector(`${libraryPrefix}-inventory-menu`)
            .querySelector(`${libraryPrefixClass}-inventory-card_id_${id}`);
        const count = card.querySelector(`${libraryPrefixClass}-inventory-card__count`);
        count.innerHTML = newCount.toString();
    }
}

export default InventoryView;
