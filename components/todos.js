import { List, removeOldList, removeTodo, scrollToItemAfterSave } from "./function";
/* Pass current list and 'valueOfTodo' => display items based on this condition */
export const todos = (list, valueOfTodo) => {
  /* Call function to remove 'old' list */
  removeOldList()
  /* create todo element from list and display them on page */
  const todosContainer = document.createElement('articel')
  todosContainer.setAttribute('id', 'todosContainer')
  let showList = document.createElement('ul')
  showList.classList.add('showList')
  document.body.appendChild(todosContainer)
  todosContainer.appendChild(showList)
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    const titelContainer = document.createElement('section')
    titelContainer.classList.add('titelContainer')
    li.classList.add('listItem')
    li.setAttribute('id', `list${[i]}`)
    const titel = document.createElement('p');
    titel.setAttribute('id', `titel${[i]}`)
    titel.classList.add('titelContainer___titel')
    const statusOfTodo = document.createElement('input')
    const newTitel = document.createElement('input')
    newTitel.setAttribute('id', `newTitel${[i]}`)
    newTitel.classList.add('titelContainer___changeInput')
    newTitel.placeholder = 'Change titel';
    newTitel.maxLength = 30;
    newTitel.minLength = 3;
    newTitel.required = true;
    const removButton = document.createElement('button')
    const changeTextButton = document.createElement('button')
    changeTextButton.setAttribute('id', `changeButton${[i]}`)
    removButton.innerHTML = 'remove'
    statusOfTodo.type = 'checkbox'
    statusOfTodo.setAttribute('id', `checkbox${[i]}`)
    statusOfTodo.checked = list[i].done
    /* set first letter to uppercase */
    titel.innerHTML = list[i].titel[0].toUpperCase() + list[i].titel.substr(1);;
    let showContent = list[i].showContent
    /* 'valueOfTodo' check if todo is done or not =>  then display item based on this condition */
    if (list[i].done === valueOfTodo || valueOfTodo === '') {
      showList.appendChild(li);
      li.appendChild(titelContainer)
      titelContainer.appendChild(newTitel)
      titelContainer.appendChild(titel);
      li.appendChild(statusOfTodo);
      li.appendChild(removButton);
      li.appendChild(changeTextButton)
    }
    /* display save button & input for new titel or change button & display titel from todo-item */
    if (showContent) {
      newTitel.classList.add('hide')
      changeTextButton.innerHTML = 'change'
    } else {
      titel.classList.add('hide')
      changeTextButton.innerHTML = 'save'
    }



    /* EventListener remove todo   */
    removButton.addEventListener("click", (e) => {
      e.preventDefault()

      list = removeTodo(list, [i])
      todos(list, valueOfTodo)



    });
    /* EventListener change conditon for item (item.done:true/false) - To prevent list-items in todo() to reload the function is not called. 
    Updated list is send to list() and valus for input titel in todo()  */
    statusOfTodo.addEventListener("click", () => {
      list[i].done = !list[i].done
      statusOfTodo.checked = list[i].done


      /*passing list after items is change */
      List(list, valueOfTodo)
    });
    /* EventListener change todo-titel, replace p-tag with text-input, remove "change" button with save button - To prevent list-items in todo() to reload the function is not called. 
    Updated list is send to list() and valus for input titel in todo()  */
    changeTextButton.addEventListener("click", () => {


      if (!showContent) {
        changeTextButton.innerHTML = 'change'
        newTitel.classList.add('hide')
        titel.classList.remove('hide')
        list[i].showContent = showContent
        List(list, valueOfTodo)
      } else {
        titel.classList.add('hide')
        newTitel.classList.remove('hide')
        changeTextButton.innerHTML = 'save'
        list[i].showContent = showContent
        List(list, valueOfTodo)
      }
      if (newTitel.value !== '') {
        titel.innerHTML = newTitel.value[0].toUpperCase() + newTitel.value.substr(1)
        list[i].titel = newTitel.value
        let scrollToThisTodo = document.getElementById(`list${[i]}`)
        scrollToItemAfterSave(scrollToThisTodo)
        list[i].showContent = showContent
        List(list, valueOfTodo)
      }
      showContent = !showContent
    })
  }
}
