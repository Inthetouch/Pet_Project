export interface IItem {
    id: string,
    name: string;
}

export interface IModel {
    items: IItem[];
    addItem: (data: string) => IItem;
    removeItem: (id: string) => void;
}