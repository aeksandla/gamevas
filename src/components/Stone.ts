import {CanvasObject} from "./GameObject";
import sprite from "../images/stone.png";
import {withHitbox} from "../HOCs/withHitbox";
import {ActionTypes} from "../common-types";
import Inventory from "./Inventory";
import {Resource} from './../common-types';

const stoneSprite = new Image(620, 280);
stoneSprite.src = sprite;

export enum StoneSize {Xs = "xs", S = "s", M = "m", L = "l"}

const sizes = {
    [StoneSize.Xs]: {
        imageX: 580,
        imageY: 260,
        realImageWidth: 40,
        realImageHeight: 20,
        imageWidth: 2,
        imageHeight: 1,
        hitboxWidth: 0,
        hitboxHeight: 0,
    },
    [StoneSize.S]: {
        imageX: 440,
        imageY: 180,
        realImageWidth: 120,
        realImageHeight: 100,
        imageWidth: 6,
        imageHeight: 5,
        hitboxWidth: 6,
        hitboxHeight: 2,
        hitboxTop: 2,
    },
    [StoneSize.M]: {
        imageX: 240,
        imageY: 100,
        realImageWidth: 180,
        realImageHeight: 180,
        imageWidth: 9,
        imageHeight: 9,
        hitboxWidth: 9,
        hitboxHeight: 4,
        hitboxTop: 4,
    },
    [StoneSize.L]: {
        imageX: 0,
        imageY: 0,
        realImageWidth: 220,
        realImageHeight: 280,
        imageWidth: 11,
        imageHeight: 14,
        hitboxWidth: 11,
        hitboxHeight: 6,
        hitboxTop: 7,
    },
}

class _Stone extends CanvasObject {
    private sprite = stoneSprite;
    id = 'stone';
    lifeStages = [
        {size: StoneSize.L, cost: 55, drop: [{id: Resource.Stone, count: 7}]},
        {size: StoneSize.M, cost: 35, drop: [{id: Resource.Stone, count: 5}]},
        {size: StoneSize.S, cost: 15, drop: [{id: Resource.Stone, count: 3}]},
    ];
    size: StoneSize;

    constructor({x, y, size = StoneSize.M}: { x: number; y: number, size: StoneSize}) {
        super();
        this.size = size;
        this.state = {
            x, y,
            sprite: {
                ...sizes[size],
            },
        }
        this.addEventListener(ActionTypes.MouseDown, this.break);
    }

    break = () => {
        this.addToInventory();
        if (this.size === StoneSize.S) {
            this.destroy();
            return;
        }
        const currentIndex = this.lifeStages.findIndex(item => item.size === this.size);
        this.size = this.lifeStages[currentIndex + 1].size;
        this.setState({
            sprite: {
                ...sizes[this.size],
            },
        });
    }

    addToInventory = () => {
        const current = this.lifeStages.find(item => item.size === this.size);
        current.drop.forEach(dropItem => {
            Inventory.instance.addItem(dropItem.id, dropItem.count);
        });
    }
}

export const Stone = withHitbox(_Stone)
export default Stone;
