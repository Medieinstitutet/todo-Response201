/* remove old list */
import { actionButtons } from "./actionButtons"
import { addTodo } from "./addTodo"
import { todos } from "./todos"



/* remove the old list if its content changes   */
export const removeElement = (element) => {
    const removeElemnt = document.getElementById(`${element}`)
    if (removeElemnt) {
        removeElemnt.remove()
    }
}


/* Remove todo from list */
export const removeTodo = (list, removeItem) => {
    if (list && removeItem) {
        list.splice(removeItem, 1)
        /*passing current list after todo is removd  */
        List(list)
    }
}



/* Add new todo, 'valueOfTodo' =>  display items based on this condition*/
export const addTodoToList = (data, list, valueOfTodo) => {
    if (data) {
        list.push(data)
        /*passing current list after new todo is added and 'valueOfTodo' => display items based on this condition */
        List(list, valueOfTodo)
    }
}



/* "list" give back updated list, 'valueOfTodo' =>  display items based on this condition */
export const List = (list, valueOfTodo) => {
    let startList = [
        { titel: 'drink water', done: true, showContent: true },
        { titel: 'fix css', done: false, showContent: true },
        { titel: 'make dinner', done: true, showContent: true },
        { titel: "Make dinner", done: true, showContent: true },
        { titel: "Wash car", done: true, showContent: true },
        { titel: "Write code", done: false, showContent: true },
        { titel: "Read book", done: true, showContent: true },
        { titel: "Walk dog", done: false, showContent: true },
        { titel: "Clean room", done: false, showContent: true }
    ];

    /* if list changes, new current list is passed to components  */
    if (list) {
        addTodo(list, valueOfTodo);
        actionButtons(list, valueOfTodo)
        todos(list, valueOfTodo)
    }
    /* give default list to components if updated list is missing*/
    else {
        addTodo(startList, valueOfTodo);
        actionButtons(startList, valueOfTodo)
        todos(startList, valueOfTodo)
    }
}




/* Function to disable editing of a todo (change/save button) */
export const closeChangeItems = (list, valueOfTodo, todoItem) => {
    list.forEach(item => {
        if (item === todoItem) {
        } else {
            item.showContent = true
        }
        List(list, valueOfTodo)
    })
}



/* Give ha short delay before list update */
export const timeOutList = (list, valueOfTodo) => {
    setTimeout(() => {
        List(list, valueOfTodo)
    },
        600
    );
}
