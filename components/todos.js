import { List, closeChangeItems, removeElement, removeTodo, timeOutList } from "./function";
/* Pass current list and 'valueOfTodo' => display items based on this condition */
export const todos = (list, valueOfTodo) => {
  /* Call function to remove 'old' list */
  removeElement('todosContainer')
  /* create todo element from list and display them on page */
  const todosContainer = document.createElement('articel')
  todosContainer.setAttribute('id', 'todosContainer')
  let showList = document.createElement('tabel')
  showList.classList.add('showList')
  document.body.appendChild(todosContainer)
  todosContainer.appendChild(showList)
  const thTitel = document.createElement('th');
  thTitel.textContent = 'Titel';
  const thDone = document.createElement('th');
  thDone.textContent = 'Done';
  const thRemove = document.createElement('th');
  thRemove.textContent = 'Remove';
  const thChange = document.createElement('th');
  thChange.textContent = 'Change';
  const headerRow = document.createElement('tr');
  headerRow.classList.add('listItem')
  showList.appendChild(headerRow);
  headerRow.appendChild(thTitel);
  headerRow.appendChild(thDone);
  headerRow.appendChild(thRemove);
  headerRow.appendChild(thChange);
  for (let i = 0; i < list.length; i++) {
    const row = document.createElement('tr');
    row.classList.add('listItem')
    const titelContainer = document.createElement('td');
    titelContainer.classList.add('titelContainer');
    const doneContainer = document.createElement('td');
    doneContainer.classList.add('doneContainer');
    const removeContainer = document.createElement('td');
    const changeContainer = document.createElement('td');
    const titel = document.createElement('p');
    titel.classList.add('titelContainer___titel');
    const SpanstatusOfTodo = document.createElement('div')
    const statusOfTodo = document.createElement('input');
    const newTitel = document.createElement('input');
    newTitel.classList.add('titelContainer___changeInput');
    newTitel.placeholder = 'Change titel';
    newTitel.maxLength = 30;
    newTitel.minLength = 3;
    newTitel.required = true;
    const removButton = document.createElement('button');
    const changeTextButton = document.createElement('button');
    changeTextButton.setAttribute('id', `changeButton${[i]}`);
    removButton.innerHTML = 'remove';
    statusOfTodo.classList.add('doneContainer___checkbox')
    SpanstatusOfTodo.classList.add(`doneContainer___checkbox--${list[i].done}`)
    /* set first letter to uppercase */
    titel.innerHTML = list[i].titel[0].toUpperCase() + list[i].titel.substr(1);
    let showContent = list[i].showContent;





    /* 'valueOfTodo' check if todo is done or not =>  then display item based on this condition */
    if (list[i].done === valueOfTodo || valueOfTodo === '') {
      showList.appendChild(row);
      row.appendChild(titelContainer);
      titelContainer.appendChild(newTitel);
      titelContainer.appendChild(titel);
      row.appendChild(doneContainer);
      doneContainer.appendChild(SpanstatusOfTodo);
      row.appendChild(removeContainer);
      row.appendChild(removeContainer);
      removeContainer.appendChild(removButton);
      row.appendChild(changeContainer);
      changeContainer.appendChild(changeTextButton);
    }
    /* display save-button & input for new titel or change-button & display titel from todo-item */
    if (showContent) {
      newTitel.classList.add('hide')
      changeTextButton.innerHTML = 'change'
    } else {
      titel.classList.add('hide')
      changeTextButton.innerHTML = 'save'
    }
    /* EventListener remove todo   */
    removButton.addEventListener("click", () => {
      removeTodo(list, [i])
       List(list, valueOfTodo)
      
    
    });
    /* EventListener change conditon for item (item.done:true/false)  */
    SpanstatusOfTodo.addEventListener("click", () => {
      SpanstatusOfTodo.classList.remove(`doneContainer___checkbox--${list[i].done}`)
      list[i].done = !list[i].done

      SpanstatusOfTodo.classList.add(`doneContainer___checkbox--${list[i].done}`)
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
}
