

import { sendToAnotherFile } from './function';



/* Pass current list and 'valueOfTodo'=> display items based on this condition */
export const addTodo = (list, valueOfTodo) => {



    /* component input container  */
    const addTodoContainer = document.createElement('articel')
    addTodoContainer.classList.add('addTodoContainer')

    /*  inputs container */
    const inputContainer = document.createElement('form')
    inputContainer.classList.add('inputContainer')
    const closeButtonContainer = document.createElement('section')
    closeButtonContainer.classList.add('inputContainer___closeButtonContainer')


    /* Text */
    const text = document.createElement('h2')
    text.classList.add('inputContainer___text')
    text.innerHTML = 'Add a todo'

    /*  inputs  */
    const titel = document.createElement('input')
    titel.classList.add('inputContainer___titel')
    titel.placeholder = 'Titel'
    titel.minLength = 3;
    titel.maxLength = 20;
    titel.required = true

    const task = document.createElement('textarea')
    task.classList.add('inputContainer___task')
    task.placeholder = 'what to fix'
    task.minLength = 3;
    task.maxLength = 120;
    task.required = true



    /*  button add todo */

    const addButton = document.createElement('button')
    addButton.classList.add('inputContainer___button')
    addButton.innerHTML = 'Add todo'
    addButton.type = "submit"






    /* add elements to page  */
    document.body.appendChild(addTodoContainer)
    addTodoContainer.appendChild(inputContainer)
    inputContainer.appendChild(closeButtonContainer)
    inputContainer.appendChild(text)
    inputContainer.appendChild(titel)
    inputContainer.appendChild(task)
    inputContainer.appendChild(addButton)





    /* EventListener add new todo */

    inputContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        /* create new todo with values from input: titel.value, task.value. done.value:  false by defaul */
        let data = { titel: titel.value, subject: task.value, done: false }
        /* passing data(new todo information), current List, 'valueOfTodo' => display items based on this condition  */
        sendToAnotherFile(data, list, valueOfTodo)
        titel.value='';
        task.value='';

    });







}



