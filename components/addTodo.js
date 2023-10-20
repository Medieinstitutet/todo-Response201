import { showAndHideElements } from './showAndHideElements'
import { todos } from './todos'

export const addTodo = () => {







    /* component container  */
    const addTodoContainer = document.createElement('articel')
    addTodoContainer.classList.add('addTodoContainer')

    /*  inputs container */
    const inputContainer = document.createElement('section')
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



    /*  buttons */

    const addButton = document.createElement('button')
    addButton.classList.add('inputContainer___button')
    addButton.innerHTML = 'Add todo'
    addButton.type = "submit"




    const closeButton = document.createElement('button')
    closeButton.classList.add('inputContainer___closeButtonContainer___closeButton')
    closeButton.innerHTML = 'X'
    closeButton.type = "default"


    /* add elements to page  */
    document.body.appendChild(addTodoContainer)
    addTodoContainer.appendChild(inputContainer)
    inputContainer.appendChild(closeButtonContainer)
    closeButtonContainer.appendChild(closeButton)
    inputContainer.appendChild(text)
    inputContainer.appendChild(titel)
    inputContainer.appendChild(task)
    inputContainer.appendChild(addButton)

    /* Functions */

    /* add todo */
    const AddTodo = (e) => {
        e.preventDefault()
        console.log(titel.value)

    }



    /* EventListner */


    inputContainer.addEventListener("submit", AddTodo)

    closeButton.addEventListener('click', (e) => showAndHideElements(e, addTodoContainer, todos()))



}



