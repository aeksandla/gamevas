import {libraryPrefix} from "../constants";
import GamevasJSX from "../GamevasJSX";
import {Resource, IResource} from "./../common-types";
import Inventory, {InventoryData} from "./Inventory";

const inventoryMenu = `${libraryPrefix}-inventory-menu`;
const inventoryCard = `${libraryPrefix}-inventory-card`;
const inventoryCardName = `${libraryPrefix}-inventory-card__name`;
const inventoryCardImage = `${libraryPrefix}-inventory-card__image`;
const inventoryCardCount = `${libraryPrefix}-inventory-card__count`;
const inventoryCardId = `${libraryPrefix}-inventory-card__id_`;

export class InventoryView {

    getInventoryMenu = (data: InventoryData) => {
        const getResourceInfo = (id: Resource) => Inventory.instance.resources.find(resource => resource.id === id);

        return <div className={inventoryMenu}>
            {
                Object.entries(data).map(([id, count]: [Resource, number]) => this.createCard({
                    count,
                    ...getResourceInfo(id)
                }))
            }
        </div>
    }

    createCard = ({count, name, image, id}: IResource & {count: number}) => {
        return <div className={`${inventoryCard} ${inventoryCardId}${id}`}>
            <div className={`${inventoryCardName}`}>{name}</div>
            <img className={`${inventoryCardImage}`} src={image}/>
            <div className={`${inventoryCardCount}`}>{count}</div>
        </div>
    }

    updateCard = (id: Resource, newCount: number) => {
        const card = document
            .querySelector(`.${inventoryMenu}`)
            .querySelector(`.${inventoryCardId}${id}`);
        const count = card.querySelector(`.${inventoryCardCount}`);
        count.innerHTML = newCount.toString();
    }
}

export default InventoryView;
