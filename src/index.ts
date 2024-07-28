import "./styles/styles.css"
import { todos } from "./utils/constants"
import { Item } from "./components/Item"
import { Form } from "./components/Form"
import { Model } from "./components/Model"
import { Page } from "./components/Page"
import { ItemPresentor } from "./components/Presenter"

const contentElement = document.querySelector('.content') as HTMLElement;
const itemContainer = new Page(contentElement);
const todoArray = new Model();
todoArray.items = todos;
const itemPresenter = new ItemPresentor(todoArray, Form, itemContainer, Item);

itemPresenter.init();
itemPresenter.renderView();