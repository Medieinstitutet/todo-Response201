
import { List, removeOldList, removeTodo } from "./function";


/* Pass current list and 'valueOfTodo' => display items based on this condition */

export const todos = (list, valueOfTodo) => {

  /* Call function to remove 'old' list */
  removeOldList()



  const todosContainer = document.createElement('section')
  todosContainer.setAttribute('id', 'todosContainer')




  let showList = document.createElement('ul')
  showList.classList.add('showList')





  document.body.appendChild(todosContainer)
  todosContainer.appendChild(showList)

  for (let i = 0; i < list.length; i++) {

    const li = document.createElement('li');
    const titel = document.createElement('h4');
    const subject = document.createElement('p');
    const key = document.createElement('p');
    const statusOfTodo = document.createElement('input')
    const removButton = document.createElement('button')
    removButton.innerHTML = 'remove'
    statusOfTodo.type = 'checkbox'
    statusOfTodo.checked = list[i].done
    titel.innerHTML = list[i].titel;
    subject.innerHTML = list[i].subject;

    /* 'valueOfTodo' check if todo is done or not =>  then display item based on this condition */
    if (list[i].done === valueOfTodo || valueOfTodo === '' ) {
      showList.appendChild(li);
      li.appendChild(titel);
      li.appendChild(subject);
      li.appendChild(key);
      li.appendChild(statusOfTodo);
      li.appendChild(removButton);
    }

    /* EventListener remove todo   */
    removButton.addEventListener("click", (e) => {
      e.preventDefault();
      removeTodo(list, [i])
      /*passing list after items is removd */
      List(list, valueOfTodo)

    });




    /* EventListener change conditon for item (item.done:true/false) */
    statusOfTodo.addEventListener("click", (e) => {
      list[i].done = !list[i].done
       /*passing list after items is change */
      List(list, valueOfTodo)
    });



  }








}
