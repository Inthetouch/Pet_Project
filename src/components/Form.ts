export interface IForm {
    buttonText: string;
    placeholder: string;
    setHandler(handleFormSubmit: Function): void;
    render(): HTMLFormElement;
    setValue(data:string): void;
    getValue(): string;
    clearValue(): void;
}

export interface IFormConstructor {
    new (formTemplate: HTMLTemplateElement): IForm;
}

export class Form implements IForm {
    protected formELement: HTMLFormElement;
    protected inputField: HTMLInputElement;
    protected submitButton: HTMLButtonElement;
    protected handleFormSubmit: Function;

    constructor(formTemplate: HTMLTemplateElement) {
        this.formELement = formTemplate.content.querySelector('.todos__form').cloneNode(true) as HTMLFormElement;
        this.inputField = this.formELement.querySelector('.todo-form__input');
        this.submitButton = this.formELement.querySelector('.todo-form__submit-btn');
        this.formELement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit(this.inputField.value);
        });
    }

    setHandler(handleFormSubmit: Function) {
        this.handleFormSubmit = handleFormSubmit;
    }

    render() {
        return this.formELement;
    }

    setValue(data: string) {
        this.inputField.value = data;
    }

    getValue() {
        return this.inputField.value;
    }

    clearValue() {
        this.formELement.reset();
    }

    set buttonText(data: string) {
        this.submitButton.textContent = data;
    }

    set placeholder(data: string) {
        this.inputField.placeholder = data;
    }
}