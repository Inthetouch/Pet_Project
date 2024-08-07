import { IItem } from "../types/index"

export interface IViewItem {
    id: string;
    name: string;
    render(item: IItem): HTMLElement;
    setCopyHandler(handleCopyItem: Function):void;
    setDeleteHandler(handleDeleteItem: Function):void;
}

export interface IViewItemConstructor {
    new (template: HTMLTemplateElement): IViewItem
}

export class Item implements IViewItem{
    protected itemElement: HTMLElement;
    protected title: HTMLElement;
    protected _id: string;
    protected copyButton: HTMLButtonElement;
    protected deleteButton: HTMLButtonElement;
    protected handleCopyItem: Function;
    protected handleDeleteItem: Function;

    constructor(template: HTMLTemplateElement) {
        this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
        this.title = this.itemElement.querySelector('.todo-item__text'); 
        this.copyButton = this.itemElement.querySelector('.todo-item__copy');
        this.deleteButton = this.itemElement.querySelector('.todo-item__del');
    }

    set id (value: string) {
        this._id = value;
    }

    get id(): string {
        return this._id || '';
    }

    set name(value: string) {
        this.title.textContent = value;
    }

    get name(): string {
        return this.title.textContent || '';
    }

    setCopyHandler(handleCopyItem: Function) {
        this.handleCopyItem = handleCopyItem;
        this.copyButton.addEventListener('click', (event) => {
            this.handleCopyItem(this);
        })
    }

    setDeleteHandler(handleDeleteItem: Function) {
        this.handleDeleteItem = handleDeleteItem;
        this.deleteButton.addEventListener('click', (event) => {
            this.handleDeleteItem(this);
        })
    }

    render(item: IItem) {
        this.name = item.name;
        this.id = item.id;
        return this.itemElement;
    }
}