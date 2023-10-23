/* remove old list */
import { actionButtons } from "./actionButtons"
import { addTodo } from "./addTodo"
import { todos } from "./todos"





/* remove the old list if its content changes   */
export const removeOldList = () => {
    const removeElemnt = document.getElementById('todosContainer')
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
    if (data && list) {
        list.push(data)
    }
    if (list) {
        /*passing current list after new todo is added and 'valueOfTodo' => display items based on this condition */
        List(list, valueOfTodo)
    }
}
/* "list" give back updated list, 'valueOfTodo' =>  display items based on this condition */
export const List = (list, valueOfTodo) => {
    let startList = [{ titel: 'a', done: true }, { titel: 'c', done: false }, { titel: 'b', done: true }]
    /* if list changes, new current list is passed to components  */
    if (list) {
        todos(list, valueOfTodo)
        addTodo(list, valueOfTodo);
        actionButtons(list)
    }
    /* give default list to components if updated list is missing*/
    else {
        todos(startList, valueOfTodo)
        addTodo(startList, valueOfTodo);
        actionButtons(startList)
    }
}


/* change titel => todo, find todo in current list, change old titel to new titel, update list after change of titel, 'valueOfTodo' => display items based on this condition */
export const changeTitel = (list, todoItem, newTitel, valueOfTodo) => {
    list[todoItem].titel = newTitel
    List(list, valueOfTodo)
}


