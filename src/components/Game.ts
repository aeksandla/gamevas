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

    showToolbox = (root?: string) => {
        const form = document.createElement('form');
        form.style.padding = '10px 5px'
        form.style.background = '#2f2f2f';
        form.style.color = 'white';
        form.style.position = 'fixed';
        form.style.top = '50vh';
        form.style.left = '0';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        const isShowHitboxCheckbox = this.createCheckbox('Хитбокс', 'isShowHitbox');
        const isShowGridCheckbox = this.createCheckbox('Сетка', 'isShowGrid');
        const isShowHitboxGridCheckbox = this.createCheckbox('Сетка хитбокса', 'isShowHitboxGrid');
        form.append(isShowHitboxCheckbox);
        form.append(isShowGridCheckbox);
        form.append(isShowHitboxGridCheckbox);
        document.querySelector(root || 'body').append(form);
    }

    private createCheckbox = (innerText: string, name: string) => {
        const checkbox = document.createElement('input');
        checkbox.name = name;
        checkbox.type = 'checkbox';
        // @ts-ignore
        checkbox.onchange = () => Game[name] = !Game[name];
        const label = document.createElement('label');
        label.innerText = innerText;
        label.append(checkbox);
        return label;
    }
}

export default Game;
