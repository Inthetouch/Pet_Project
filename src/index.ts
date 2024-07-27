import "./styles/styles.css"
import { todos } from "./utils/constants"
import { Item } from "./components/Item"
import { Form } from "./components/Form"
import { Model } from "./components/Model"
import { Page } from "./components/Page"

const contentElement = document.querySelector('.content') as HTMLElement;
const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;

const page = new Page(contentElement);
const todoArray = new Model();
todoArray.items = todos;

const todoForm = new Form(formTemplate);
todoForm.setHandler(handleFormSubmit);

page.formContainer = todoForm.render();


function handleFormSubmit(data:string) {
    todoArray.addItem(data);
    todoForm.clearValue();
    renderItems();
}

function renderItems() {
    page.todoContainer = todoArray.items.map(item => {
        const todoItem = new Item(itemTemplate);
        const itemElement = todoItem.render(item)
        return(itemElement);
    }).reverse();
}

renderItems();