import { eventListenerTodos } from "./eventListeners";
import { removeElement } from "./functions";


/* Pass current list and 'valueOfTodo' => display items based on this condition */
export const todos = (list, valueOfTodo) => {
  const container = document.getElementById('container')


  /* Call function to remove 'old' list */
  removeElement('todosContainer')




  /* create todo element from list and display them on page */
  const todosContainer = document.createElement('articel')
  todosContainer.setAttribute('id', 'todosContainer')
  let showList = document.createElement('tabel')
  showList.classList.add('showList')
  container.appendChild(todosContainer)
  todosContainer.appendChild(showList)
  const thTitel = document.createElement('th');
  thTitel.textContent = 'Titel';
  const thDone = document.createElement('th');
  thDone.textContent = 'Done';
  const thDelete = document.createElement('th');
  thDelete.textContent = 'Delete';
  const thChange = document.createElement('th');
  thChange.textContent = 'Change';
  const headerRow = document.createElement('tr');
  headerRow.classList.add('listItem')
  showList.appendChild(headerRow);
  headerRow.appendChild(thTitel);
  headerRow.appendChild(thDone);
  headerRow.appendChild(thDelete);
  headerRow.appendChild(thChange);


  /* looping over elements in list */
  for (let i = 0; i < list.length; i++) {
    const row = document.createElement('tr');
    row.classList.add('listItem')
    const titelContainer = document.createElement('td');
    titelContainer.classList.add('titelContainer');
    const doneContainer = document.createElement('td');
    doneContainer.classList.add('doneContainer');
    const deleteContainer = document.createElement('td');
    const changeContainer = document.createElement('td');
    const titel = document.createElement('p');
    titel.classList.add('titelContainer___titel');
    const statusOfTodoCheck = document.createElement('div')
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
    removButton.innerHTML = 'Delete';
    statusOfTodo.classList.add('doneContainer___checkbox')
    statusOfTodoCheck.classList.add(`doneContainer___checkbox--${list[i].done}`)
    /* set first letter to uppercase */
    titel.innerHTML = list[i].titel[0].toUpperCase() + list[i].titel.substr(1);
    let showContent = list[i].showContent;



    /* 'valueOfTodo' check if todo is done or not =>  then display item based on this condition */
    if (list[i].done === valueOfTodo || valueOfTodo === '' || valueOfTodo === 'noActiveButton' ) {
      showList.appendChild(row);
      row.appendChild(titelContainer);
      titelContainer.appendChild(newTitel);
      titelContainer.appendChild(titel);
      row.appendChild(doneContainer);
      doneContainer.appendChild(statusOfTodoCheck);
      row.appendChild(deleteContainer);
      row.appendChild(deleteContainer);
      deleteContainer.appendChild(removButton);
      row.appendChild(changeContainer);
      changeContainer.appendChild(changeTextButton);
    }


    /* display save-button & input for new titel or change-button & display titel from todo-item */
    if (showContent) {
      newTitel.classList.add('hide')
      changeTextButton.innerHTML = 'Change'
    } else {
      titel.classList.add('hide')
      changeTextButton.innerHTML = 'Save'
    }


    /* eventListners for removButton, changeTextButton and statusOfTodoCheck  */
    eventListenerTodos(list, statusOfTodoCheck, changeTextButton, newTitel, removButton, [i], valueOfTodo)
  }
}
