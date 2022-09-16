import stonePreview from "./images/stone_preview.png";

export type ResourceId = string | number;

export interface Resource {
    name: string;
    id: ResourceId;
    image: string;
}

export const stone: Resource = {name: 'камень', id: 'stone', image: stonePreview};
