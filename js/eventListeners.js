import { List, addTodoToList, closeChangeItems, removeTodo, timeOutList } from "./functions";
import { todos } from "./todos";



/* eventListener for actionButtons */
export const eventListenerActionButtons = (list, sortList, notDone, done) => {
    /* sort current list after titel(alphabetical order) */
    sortList.addEventListener('click', (e) => {
        e.preventDefault()
        list.sort((a, b) => {
            const nameA = a.titel.toLowerCase();
            const nameB = b.titel.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // if two titels are equal
            return 0;
        });
        /* give back a sorted list and display todos with value 'not done', remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, '', '')
        List(list, '')
        todos(list, '')
    })
    done.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'done' from current list, remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, true, '')
        List(list, true)
        todos(list, true)
    })
    notDone.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'not done' from current list,  remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, false, '')
        List(list, false)
        todos(list, false)
    })
}






/* eventListener for Todos */
export const eventListenerTodos = (list, statusOfTodoCheck, changeTextButton, newTitel, removButton, [i], valueOfTodo,) => {
    /* EventListener remove todo   */
    removButton.addEventListener("click", () => {
        removeTodo(list, [i])
        List(list, valueOfTodo)
    });
    /* EventListener change conditon for item (item.done:true/false)  */
    statusOfTodoCheck.addEventListener("click", () => {
        statusOfTodoCheck.classList.remove(`doneContainer___checkbox--${list[i].done}`)
        list[i].done = !list[i].done
        statusOfTodoCheck.classList.add(`doneContainer___checkbox--${list[i].done}`)
        /*passing list after items is change */
        timeOutList(list, valueOfTodo)
    });
    /* EventListener change todo-titel, replace p-tag with text-input, remove "change" button with save button and revers based on showContent value */
    changeTextButton.addEventListener("click", () => {
        /* close item if user click on change-button  */
        closeChangeItems(list, valueOfTodo, list[i])
        list[i].showContent = !list[i].showContent
        if (newTitel.value !== '') {
            list[i].titel = newTitel.value
        }
        List(list, valueOfTodo)
    })
}


/* eventListener for addTodo */
export const eventListenerAddTodo = (list, valueOfTodo, titel, inputContainer) => {
    /* EventListener add new todo */
    inputContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        /* create new todo with values from input: titel.value, done.value: false by defaul */
        let data = { titel: titel.value, done: false, showContent: true }
        /* passing data(new todo information), current List, 'valueOfTodo' => display items based on this condition  */
        addTodoToList(data, list, valueOfTodo)
        titel.value = '';
    })
}