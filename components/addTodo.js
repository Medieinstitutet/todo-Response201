import { addTodoToList, removeElement } from './function';
/* Pass current list and 'valueOfTodo'=> display items based on this condition */
export const addTodo = (list, valueOfTodo) => {

    removeElement('addTodoContainer')

    const container = document.getElementById('container')

    /* component input container  */
    const addTodoContainer = document.createElement('articel')
    addTodoContainer.classList.add('addTodoContainer')
    addTodoContainer.setAttribute('id', 'addTodoContainer')


    /*  inputs container */
    const inputContainer = document.createElement('form')
    inputContainer.classList.add('inputContainer')
    const closeButtonContainer = document.createElement('section')
 

    /* Text */
    const text = document.createElement('h2')
    text.classList.add('inputContainer___text')
    text.innerHTML = 'Add a todo'

    /*  input  */
    const titel = document.createElement('input')
    titel.classList.add('inputContainer___titel')
    titel.minLength = 3;
    titel.maxLength = 30;
    titel.required = true;

    /*  button add todo */
    const addButton = document.createElement('button')
    addButton.classList.add('inputContainer___button')
    addButton.innerHTML = 'Add todo'
    addButton.type = "submit"

    /* add elements to page  */
    container.appendChild(addTodoContainer)
    addTodoContainer.appendChild(inputContainer)
    inputContainer.appendChild(text)
    inputContainer.appendChild(titel)
    inputContainer.appendChild(addButton)





    /* EventListener add new todo */
    inputContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        /* create new todo with values from input: titel.value, done.value: false by defaul */
        let data = { titel: titel.value, done: false, showContent:true }
        
        /* passing data(new todo information), current List, 'valueOfTodo' => display items based on this condition  */
        addTodoToList(data, list, valueOfTodo)
        titel.value='';
    });
}
